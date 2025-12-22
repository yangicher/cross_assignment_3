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
    loading: boolean;
    error: string | null;
    lastUpdated: number | null;
}

const initialState: MentorsState = {
    list: [],
    loading: false,
    error: null,
    lastUpdated: null,
};

const mentorsSlice = createSlice({
    name: 'mentors',
    initialState,
    reducers: {
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
export default mentorsSlice.reducer;