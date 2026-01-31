# Cat-Phish.com

## The Problem (Situation/Task)

In an era where 1-in-4 dating profiles are AI bots and romance scams are a billion-dollar industry, visual identity has become a primary vulnerability. Traditional "identity verification" is easily bypassed by high-fidelity deepfakes. The challenge was to build a "Human-in-the-Loop" architecture that proves humanity through Semantic Logic rather than just facial symmetry.

## The Solution

Cat-Phish.com utilizes a Zero Trust framework to verify users. Using Gemini 3’s native multimodality in AI Studio, the system intercepts selfies and generates consistent "Cat Personas" (Privacy-by-Design), ensuring no PII is exposed. I implemented the Forward Propagation Consensus (FPC) model: a "Semantic Leaky ReLU" activation where users must pass high-context "Logic Traps" to unlock the original image. The project integrates Firebase for secure data handling and was deployed via Antigravity CLI for streamlined environment management.

## The Result (Result)

Cat-Phish.com effectively neutralizes automated "romantic script" bots by requiring perspective-shifting responses that AI cannot yet mimic. It turns the Alice/Bob/Eve triad into a security feature, using an internal "Eve" agent to audit conversation consistency. The result is a lighter-hearted app with a serious mission: proving that cybersecurity fundamentals like Behavioral Biometrics and MitM defense are the future of digital social trust.

## 🧪 How to Play (The 3-Day Experiment)

This isn't a normal app. It's a 3-day experiment in finding your subconscious "vibe." Here's how to experience it:

### Lurker Mode: Explore the Pool (2 Minutes)

Want to see the core matching engine without creating a profile? Enter as a guest.

1.  **Launch the App & Enter Lurker Mode**
    *   Run the app and on the landing page, click the **"Lurker Mode"** button.
    *   This bypasses the entire photo setup and lets you explore the app as a guest.

2.  **Enter the Protocol**
    *   You are now on the main dashboard. The app will tell you it's time to begin the **Day 1 Protocol**. Click **"Begin Day 1 Probe"**.
    *   You will be presented with 5 strange, multiple-choice questions. There are no right answers. Answer with your gut.

3.  **Receive Your Diagnosis**
    *   After the 5th question, the AI "Insight Engine" will analyze your choices.
    *   You'll receive a **Frequency Report**: your subconscious **Archetype**, what you're truly **Seeking**, and your hidden **Dating Shadow**.
    *   It's like a personality test, but for your soul.

4.  **Explore the "Resonant Pool"**
    *   Click **"View Resonant Pool"**.
    *   You'll see a grid of other players (as cat avatars), ranked by how well their "vibe" matches yours.
    *   The journey continues for two more days, with the matches getting more accurate each day.

### The Full "CatPhish" Experience (As Intended)

To play the game as designed:

1.  Click **"Enter Experiment"** and follow the onboarding flow.
2.  Upload 3 selfies (don't worry, no one will see them yet).
3.  The AI will transform you into a "Feline Proxy." Pick your favorite.
4.  Begin the 3-day protocol, answering 5 questions each day.
5.  On Day 3, the human photos of your best matches are revealed.

## ⚙️ Configuration Notes

* **Offline MVP Mode**: The app is currently set to `ENABLE_CLOUD_SYNC = false` in `src/components/CatPhishApp.tsx`. This ensures stability during local testing by bypassing Firestore permission checks.
* **To go Live**:
    1. Update `ENABLE_CLOUD_SYNC` to `true`.
    2. Configure Firestore Rules (see `FIREBASE_HANDOFF.md`).
    3. Add `NEXT_PUBLIC_GEMINI_API_KEY` to `.env.local`.
