import Image from "next/image";

interface SwipeCardProps {
    name: string;
    age: number;
    breed: string;
    imageUrl: string;
    bio: string;
}

export function SwipeCard({ name, age, breed, imageUrl, bio }: SwipeCardProps) {
    return (
        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 border border-white/10 group">
            {/* Image */}
            <div className="absolute inset-0 bg-gray-800">
                {/* Placeholder for now since we don't have real images yet */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white/20 font-mono">
                    {imageUrl ? (
                        <Image src={imageUrl} alt={name} fill className="object-cover" />
                    ) : (
                        <span className="text-6xl">🐱</span>
                    )}
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-20" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1 text-white">
                <div className="flex items-end gap-2">
                    <h2 className="text-3xl font-bold tracking-tight">{name}</h2>
                    <span className="text-xl opacity-90 font-medium mb-1">{age}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
                        {breed}
                    </span>
                </div>

                <p className="text-sm opacity-80 leading-snug line-clamp-2">
                    {bio}
                </p>

                {/* Info Icon */}
                <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                    <span className="text-xs font-bold">i</span>
                </button>
            </div>
        </div>
    );
}
