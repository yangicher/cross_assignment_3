import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchMentors } from '../../api/api';
import { Mentor } from '../../models/Mentor';

export const getMentors = createAsyncThunk<Mentor[]>(
    'mentors/getMentors',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchMentors();
            return data;
        } catch (error) {
            return rejectWithValue('Не вдалося завантажити список менторів');
        }
    }
);

interface MentorsState {
    list: Mentor[];
    favorites: Mentor[];
    loading: boolean;
    error: string | null;
    lastUpdated: number | null;
}

const initialState: MentorsState = {
    list: [],
    favorites: [],
    loading: false,
    error: null,
    lastUpdated: null,
};

const mentorsSlice = createSlice({
    name: 'mentors',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Mentor>) => {
            const mentor = action.payload;
            const index = state.favorites.findIndex((m) => m.id === mentor.id);

            if (index >= 0) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(mentor);
            }
        },
        clearMentors: (state) => {
            state.list = [];
            state.lastUpdated = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMentors.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMentors.fulfilled, (state, action: PayloadAction<Mentor[]>) => {
                state.loading = false;
                state.list = action.payload;
                state.lastUpdated = Date.now();
            })
            .addCase(getMentors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearMentors } = mentorsSlice.actions;
export const { toggleFavorite } = mentorsSlice.actions;
export default mentorsSlice.reducer;