import Link from "next/link";

export default function Whitepaper() {
    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-6 sm:p-12 overflow-x-hidden relative">
            <div className="max-w-3xl mx-auto flex flex-col gap-10 z-10 relative">

                {/* Navigation */}
                <div className="border-b border-green-500/30 pb-4 mb-4 flex justify-between items-center">
                    <Link href="/" className="hover:text-green-400 hover:underline">
                        &lt; Return to Consensus
                    </Link>
                    <span className="opacity-50 text-xs">./whitepaper.md</span>
                </div>

                {/* Header */}
                <header className="flex flex-col gap-2">
                    <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider glitch-text">
                        Cat-Phish Protocol
                    </h1>
                    <p className="text-sm sm:text-base opacity-70">
                // v1.0.4 - "Likely-Alice" Branch
                    </p>
                </header>

                {/* Content Sections */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold border-l-4 border-green-500 pl-4">01. The Problem</h2>
                    <p className="opacity-90 leading-relaxed">
                        In an era where 1-in-4 dating profiles are AI bots and romance scams are a billion-dollar industry, visual identity has become a primary vulnerability. Traditional "identity verification" is easily bypassed by high-fidelity deepfakes.
                    </p>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded">
                        <span className="font-bold">CRITICAL ERROR:</span> Semantic Logic verification required.
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold border-l-4 border-green-500 pl-4">02. The Human Mirror</h2>
                    <p className="opacity-90 leading-relaxed">
                        Users upload a selfie to generate their <strong className="text-green-300">Cat Persona</strong>. This is your digital mask. To find others, you don't swipe—you participate in the <strong>Daily Ritual</strong>.
                    </p>
                    <p className="opacity-90 leading-relaxed mt-4">
                        Every day, you answer one abstract question (Privacy-Preserved MCQ). The system matches you with others who vibrate on your frequency.
                    </p>
                    <p className="opacity-90 leading-relaxed mt-4">
                        <strong className="text-green-300">The Reveal:</strong> The more you match answers, the more the profile reveals the human underneath the purr. Connection earns clarity.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold border-l-4 border-green-500 pl-4">03. The Result</h2>
                    <p className="opacity-90 leading-relaxed">
                        Cat-Phish.com effectively neutralizes automated "romantic script" bots by requiring perspective-shifting responses that AI cannot yet mimic.
                    </p>
                    <p className="opacity-90 leading-relaxed mt-2">
                        It turns the <strong>Alice/Bob/Eve triad</strong> into a security feature, using an internal "Eve" agent to audit conversation consistency.
                    </p>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-green-500/30 text-center text-xs opacity-50">
                    <p>DEPLOYED VIA ANTIGRAVITY CLI</p>
                    <p className="mt-2 text-[10px] animate-pulse">_CURSOR_ACTIVE</p>
                </footer>

            </div>

            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
        </div>
    );
}
