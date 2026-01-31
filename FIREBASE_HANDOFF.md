# CatPhish Project Handoff: "The Trust Engine"

## Status Overview

**Current Version**: `v0.9.5 (Offline MVP)`
**Core Logic**: ✅ Functional (Day 1-3 Loop, Insight Engine, Matches)
**UI/Aesthetics**: ⚠️ **Needs Polish** (Currently unstyled/bare-bones in some views, Tailwind may need rebuilding)
**Backend**: ⚠️ **Disabled** (Cloud Sync flag set to `false` to prevent crashes)

---

## 1. Restoring the Backend (Firebase)

We temporarily disabled Cloud Sync to bypass a "Missing Permissions" error. To go live, you must:

1. **Enable the Flag**:
    * Go to `src/components/CatPhishApp.tsx`.
    * Change `const ENABLE_CLOUD_SYNC = false;` to `true`.

2. **Fix Firestore Rules**:
    * Go to your Firebase Console -> Firestore Database -> Rules.
    * Update the rules to allow read/write for development (or properly authenticate):

    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if true; // WARNING: Dev only. Lock this down for production.
        }
      }
    }
    ```

## 2. Fixing the Aesthetics (The "Orange" Vibe)

The current build (localhost) is rendering unstyled or "Dark Mode" safe-mode screens instead of the vibrant Orange/Red gradient design.

**The Fix:**

1. **Check Tailwind**: Ensure `globals.css` is loading correctly in `layout.tsx`.
2. **Verify Assets**: Ensure the font assets and background images used in the "Prototype" are actually in the `public/` folder.
3. **Component Styling**: The `SETUP_QUESTIONS` screen in `CatPhishApp.tsx` (around line 540) is currently using `bg-slate-900`.
    * *Target Design*: Needs to match the vibrant Landing Page gradient (`bg-gradient-to-br from-orange-500 to-red-600`).
    * *Action*: Copy the CSS classes from the `LANDING` view to the `SETUP_*` views to update the visual continuity.

## 3. Deployment

Once the above are fixed:

1. Run `npm run build` to verify production CSS generation.
2. Deploy via `firebase deploy` or push to main to trigger Vercel.

**"The code is solid. The paint just needs a touch-up."**
