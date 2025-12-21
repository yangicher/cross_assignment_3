import { Mentor } from '../models/Mentor';

export type RootStackParamList = {
    Home: undefined;
    MentorForm: {
        step: number;
        totalSteps: number;
    };
    MentiForm: {
        step: number;
        totalSteps: number;
    };
    MainTabs: undefined;
    MentorsList: undefined; 
    MentorDetails: { mentor: Mentor };
};