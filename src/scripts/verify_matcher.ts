
import { SemanticMatcher } from '../lib/semantic_matcher';
import { User } from '../lib/types';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testMatcher() {
    console.log("🧪 Testing Semantic Matcher Class...");

    const matcher = new SemanticMatcher();

    // Mock Users
    const currentUser: User = {
        id: "me",
        displayName: "Test User",
        realName: "Test",
        dob: "1990-01-01",
        phoneNumber: "123",
        gender: "Any",
        location: "Cyberpunk City",
        bio: "Seeking resonance",
        interests: ["Reading", "Tea"],
        religion: "Tech",
        sexualOrientation: "Any",
        wantsKids: "No",
        smokingStatus: "No",
        humanPhotoUrl: "",
        catPhotoUrl: "",
        irisColor: "Blue",
        dailyStreak: 1,
        questions: [],
        coreTruth: "I trust code more than people.",
        traitAnswers: []
    };

    const pool = [
        {
            user: { ...currentUser, id: "c1", coreTruth: "I trust code more than people.", location: "Cyberpunk City" },
            answer: "I totally agree, code is predictable and clean."
        },
        {
            user: { ...currentUser, id: "c2", coreTruth: "Nature is the only truth.", location: "Forest" },
            answer: "I prefer the chaos of nature."
        }
    ];

    const currentAnswer = "I rely on logic and systems to navigate the world.";

    try {
        console.log(`\nUser Answer: "${currentAnswer}"`);
        console.log("Pool Size:", pool.length);

        console.log("\n...Requesting Matches...");

        const matches = await matcher.findMatches(currentUser, currentAnswer, pool);

        console.log("\n✅ Matches Received:");
        matches.forEach(m => {
            console.log(`Match ${m.targetUser.id} Score: ${m.compatibilityScore}`);
        });

        // Validation
        const topMatch = matches[0];
        if (topMatch && topMatch.compatibilityScore > matches[1].compatibilityScore) {
            console.log("\n✨ Logic Check Passed: The logically aligned user ranked higher.");
        } else {
            console.warn("\n⚠️ Logic Check Warning: Scores were close or unexpected.");
        }

    } catch (e: any) {
        console.error("\n❌ Matcher Test Failed:", e);
    }
}

testMatcher();
