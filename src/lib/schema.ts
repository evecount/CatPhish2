/**
 * CatPhish Data Schema
 * Derived from User-provided JSON Schema
 */

export interface User {
    id: string; // Auth UID
    displayName: string;
    dob: string; // Date string
    gender: string;
    location: string;
    bio: string;
    interests: string[];

    // Consistency Engine Fields
    humanPhotoUrl: string; // Original Selfie
    catPhotoUrl: string; // Generated Cat Persona
    irisColor: string; // Hex code preserved from entropy

    // Semantic Matching Fields
    semanticEmbedding?: number[]; // Vector representation of their soul
    dailyStreak: number;
    lastAnswerDate?: string;
}

export type QuestionType = 'cat-based' | 'standard';

export interface Question {
    id: string;
    text: string;
    type: QuestionType;
    // Multiple Choice Options
    options?: {
        id: string;
        text: string;
        trait: string; // e.g. "Chaotic", "Stoic"
    }[];
    semanticWeights?: { [key: string]: number };
}

export interface UserAnswer {
    id: string;
    userId: string;
    questionId: string;
    questionText: string; // Copy for display
    answer: string;
    timestamp: string; // ISO Date
    embedding?: number[]; // The semantic vector of this specific answer
}

export interface Match {
    id: string;
    users: [string, string]; // The two user IDs
    compatibilityScore: number; // 0.0 to 1.0
    sharedTraits: string[]; // e.g., ["Both dream of internet fame", "Introverted"]
    status: 'pending' | 'connected' | 'archived';
    createdAt: string;
}

export interface DailyDrop {
    date: string; // "YYYY-MM-DD"
    questionId: string; // The specific Logic Anchor for everyone that day
}

export interface Dealbreaker {
    id: string;
    userId: string;
    filterType: string; // e.g., 'ageRange', 'distance'
    value: any; // Range or specific value
}
