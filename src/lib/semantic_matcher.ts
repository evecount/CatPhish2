
import { User, DailyDrop, Match } from "./types";
import { rankResonance } from "./gemini";

export class SemanticMatcher {
    getDailyDrop(): DailyDrop {
        const rotating = [
            "What part of your reflection do you trust the most?",
            "If you were a color, which one would feel like silence?",
            "What is the most honest thing you've ever said to a stranger?",
            "If gravity stopped for 10 seconds, where would you want to be?"
        ];
        // Simple day of year mod rotation
        const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
        const index = dayOfYear % rotating.length;

        return {
            date: new Date().toISOString().split('T')[0],
            questionId: `anchor-today-${index}`,
            questionText: rotating[index]
        };
    }

    async findMatches(currentUser: User, currentAnswer: string, pool: { user: User, answer: string }[]): Promise<Match[]> {
        const candidateData = pool
            .filter(c => c.user.id !== currentUser.id)
            .map(c => ({ id: c.user.id, answer: c.answer }));

        // Use AI to rank the resonance
        // If currentAnswer is empty, skip AI ranking to save quota/time, or use default
        let scores: { id: string, score: number }[] = [];
        if (currentAnswer && candidateData.length > 0) {
            scores = await rankResonance(currentAnswer, candidateData);
        } else {
            scores = candidateData.map(c => ({ id: c.id, score: 0.5 }));
        }

        const scoreMap = new Map(scores.map(s => [s.id, s.score]));

        return pool
            .filter(c => c.user.id !== currentUser.id)
            .map(candidate => {
                const aiScore = scoreMap.get(candidate.user.id) || 0.5;

                // Add minor modifiers for core traits to "ground" the AI score
                let traitBonus = 0;
                if (candidate.user.coreTruth && currentUser.coreTruth && candidate.user.coreTruth === currentUser.coreTruth) {
                    traitBonus += 0.05;
                }
                if (candidate.user.location === currentUser.location) {
                    traitBonus += 0.05;
                }

                const finalScore = Math.min(0.99, aiScore + traitBonus);

                // Add unique ID generation that is consistent efficiently
                const sortedIds = [currentUser.id, candidate.user.id].sort();
                const matchId = `match-${sortedIds[0]}-${sortedIds[1]}`;

                return {
                    id: matchId,
                    users: [currentUser.id, candidate.user.id] as [string, string],
                    compatibilityScore: finalScore,
                    sharedTraits: Array.from(new Set([...(currentUser.interests || []), ...(candidate.user.interests || [])])).slice(0, 3),
                    status: 'pending' as const,
                    createdAt: new Date().toISOString(),
                    targetUser: candidate.user
                };
            })
            .sort((a, b) => b.compatibilityScore - a.compatibilityScore);
    }
}
