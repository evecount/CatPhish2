
import { seedPool, getCoreQuestions } from '../lib/seed_data';

function verifySeedData() {
    console.log("🌱 Verifying Seed Data...");

    console.log(`Seed Pool Size: ${seedPool.length}`);
    if (seedPool.length === 0) {
        console.error("❌ Seed pool is empty!");
    } else {
        console.log("✅ Seed pool populated.");
        console.log("Sample User:", seedPool[0].user.displayName);
    }

    const questions = getCoreQuestions();
    console.log(`Core Questions: ${questions.length}`);
    if (questions.length === 0) {
        console.error("❌ No core questions found!");
    } else {
        console.log("✅ Core questions loaded.");
        console.log("Sample Question:", questions[0].text);
    }
}

verifySeedData();
