/**
 * EVE AUDITOR AGENT
 * 
 * Goal: The "Man-in-the-Middle" on your side.
 * Detects romance scam patterns (love bombing, urgent financial requests).
 */

export class EveAuditor {

    private suspiciousKeywords = [
        "gift card", "crypto", "investment", "urgent", "hospital", "wire transfer", "princess", "soulmate"
    ];

    /**
     * Scans a chat history for "Romantic Script" patterns.
     * @returns A threat level from 0 (Safe) to 1 (Critical).
     */
    auditConversation(messages: string[]): number {
        let threatScore = 0;

        messages.forEach(msg => {
            const lowerMsg = msg.toLowerCase();

            // Pattern 1: Financial Keywords
            this.suspiciousKeywords.forEach(keyword => {
                if (lowerMsg.includes(keyword)) {
                    console.log(`EveAuditor: FLAG DETECTED - "${keyword}"`);
                    threatScore += 0.3;
                }
            });

            // Pattern 2: Love Bombing (Simple heuristic)
            if (lowerMsg.includes("love") && lowerMsg.length < 20) {
                // "I love you" too early/often
                threatScore += 0.1;
            }
        });

        return Math.min(threatScore, 1);
    }

    /**
     * Injects a challenge if a threat is detected.
     */
    triggerIntervention(threatScore: number): string | null {
        if (threatScore > 0.7) {
            return "SYSTEM WARNING: High probability of Romantic Script detected. Please verify identity via FPC Logic Trap.";
        }
        return null;
    }
}
