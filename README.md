# Cat-Phish.com

## The Problem (Situation/Task)

In an era where 1-in-4 dating profiles are AI bots and romance scams are a billion-dollar industry, visual identity has become a primary vulnerability. Traditional "identity verification" is easily bypassed by high-fidelity deepfakes. The challenge was to build a "Human-in-the-Loop" architecture that proves humanity through Semantic Logic rather than just facial symmetry.

## The Solution

Cat-Phish.com utilizes a Zero Trust framework to verify users. Using Gemini 3’s native multimodality in AI Studio, the system intercepts selfies and generates consistent "Cat Personas" (Privacy-by-Design), ensuring no PII is exposed. I implemented the Forward Propagation Consensus (FPC) model: a "Semantic Leaky ReLU" activation where users must pass high-context "Logic Traps" to unlock the original image. The project integrates Firebase for secure data handling and was deployed via Antigravity CLI for streamlined environment management.

## The Result (Result)

Cat-Phish.com effectively neutralizes automated "romantic script" bots by requiring perspective-shifting responses that AI cannot yet mimic. It turns the Alice/Bob/Eve triad into a security feature, using an internal "Eve" agent to audit conversation consistency. The result is a lighter-hearted app with a serious mission: proving that cybersecurity fundamentals like Behavioral Biometrics and MitM defense are the future of digital social trust.

## 🧪 Testing & Demo Instructions

To verify the core "Trust Engine" logic without creating a full account:

1. **Launch the App**:

    ```bash
    npm run dev
    # Access at http://localhost:3000
    ```

2. **Debug / Fast-Track Mode**:
    * On the **Landing Page**, look for the small text button: **"DEBUG: SKIP TO GAMEPLAY"**.
    * Clicking this bypasses the photo upload/transformation step (which requires a valid API key and file interaction).
    * It instantly logs you in as a "Debug Tester" allowing you to immediately experience the **Day 1 Protocol** questions.

3. **Insight Engine Verification**:
    * Answer the 5 daily questions (randomly or thoughtfully).
    * Verify that the **Frequency Report** generates a "Consultant Note" (yellow post-it) analyzing your choices.
    * Proceed to the **Dashboard** to see matching logic in action.

## ⚙️ Configuration Notes

* **Offline MVP Mode**: The app is currently set to `ENABLE_CLOUD_SYNC = false` in `src/components/CatPhishApp.tsx`. This ensures stability during local testing by bypassing Firestore permission checks.
* **To go Live**:
    1. Update `ENABLE_CLOUD_SYNC` to `true`.
    2. Configure Firestore Rules (see `FIREBASE_HANDOFF.md`).
    3. Add `NEXT_PUBLIC_GEMINI_API_KEY` to `.env.local`.
