
import { GoogleGenAI } from "@google/genai";
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifyKey() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return;
    }

    const ai = new GoogleGenAI({ apiKey });

    const candidate = "gemini-2.5-flash";
    console.log(`Testing with model: ${candidate}`);

    try {
        const responseContent = await ai.models.generateContent({
            model: candidate,
            contents: { parts: [{ text: "Respond with 'Meow' if you can hear me." }] }
        });
        console.log(`✅ Success with ${candidate}!`);
        console.log("🤖 Response:", responseContent.response.candidates?.[0]?.content?.parts?.[0]?.text);
    } catch (e: any) {
        console.error(`❌ Failed with ${candidate}:`, e.message);

        // Fallback
        console.log("Trying gemini-2.0-flash...");
        try {
            const response2 = await ai.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: { parts: [{ text: "Meow?" }] }
            });
            console.log(`✅ Success with gemini-2.0-flash!`);
        } catch (e2: any) {
            console.error("❌ Failed with gemini-2.0-flash too:", e2.message);
        }
    }
}

verifyKey();
