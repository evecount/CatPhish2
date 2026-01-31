import Link from "next/link";

export function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/5 pb-6 pt-4 px-8 flex justify-between items-center z-50 max-w-md mx-auto sm:rounded-t-3xl sm:bottom-4">

            {/* Profile */}
            <button className="p-2 opacity-50 hover:opacity-100 transition-opacity" aria-label="Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </button>

            {/* Stack (Active) */}
            <button className="p-3 bg-white/5 rounded-full text-primary shadow-[0_0_15px_rgba(255,107,0,0.3)]" aria-label="Explore Stack">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l3-3a2 2 0 0 0 0-2.828z"></path>
                    <path d="M12.9 2.1a13.3 13.3 0 0 1 1.7 1.3 2 2 0 0 1 0 2.8l-7.5 7.4"></path>
                    <path d="M11 21.05a2 2 0 0 0 1.95 1.95h5.1a2 2 0 0 0 1.95-1.95V15.9a2 2 0 0 0-1.95-1.95H13"></path>
                </svg>
            </button>

            {/* Chat */}
            <button className="p-2 opacity-50 hover:opacity-100 transition-opacity" aria-label="Chats">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>

        </div>
    );
}
