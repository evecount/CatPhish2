
export interface User {
    id: string;
    email?: string;
    displayName: string;
    realName: string; // The human name
    dob: string;
    gender: string;
    location: string;

    // Profile Bio / Core
    bio: string;
    interests: string[]; // 3 emojis/words representing their "vibe"

    // Dealbreakers / Fliters
    religion: string;
    sexualOrientation: string;
    wantsKids: string;
    smokingStatus: string;

    phoneNumber: string;

    // Photos
    humanPhotoUrl: string; // Original selfie
    catPhotoUrl: string;   // Generated cat avatar
    irisColor: string;     // Extracted from human photo

    // Gamification
    dailyStreak: number;
    lastActive?: string;

    // Q&A
    questions: QuestionResponse[];
    coreTruth?: string; // One of the 8 "vibe" truths
    traitAnswers?: { questionId: string, choiceId: string, trait: string }[];
}

export interface Question {
    id: string;
    text: string;
    type: 'binary' | 'open' | 'cat-based';
    options: { id: string, text: string, trait?: string }[];
}

export interface QuestionResponse {
    questionId: string;
    answer: string;
    timestamp: string;
}

export interface Match {
    id: string;
    users: [string, string]; // User IDs
    compatibilityScore: number; // 0.0 to 1.0 (AI + Logic)
    sharedTraits: string[];
    status: 'pending' | 'accepted' | 'rejected' | 'chatting';
    createdAt: string;
    targetUser?: User; // Hydrated for UI convenience
}

export interface DailyDrop {
    date: string;
    questionId: string;
    questionText: string;
}

export interface ChatMessage {
    id: string;
    senderId: string;
    text: string;
    timestamp: number;
    isSystem?: boolean;
}

export interface FrequencyInsight {
    day: number;
    archetype: string;
    summary: string;
    seeking: string;
    shadow: string;
    consultantNote?: string;
}

export enum AppScreen {
    LANDING = 'LANDING',
    ABOUT = 'ABOUT',
    SETUP_BASICS = 'SETUP_BASICS',
    SETUP_PICK_CAT = 'SETUP_PICK_CAT',
    SETUP_DETAILS = 'SETUP_DETAILS',
    SETUP_QUESTIONS = 'SETUP_QUESTIONS',
    DAILY_DASHBOARD = 'DAILY_DASHBOARD',
    FREQUENCY_REPORT = 'FREQUENCY_REPORT',
    STATS_BOARD = 'STATS_BOARD',
    EDIT_PROFILE = 'EDIT_PROFILE'
}
