import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, RefreshCw } from "lucide-react";

interface InteractiveImageProps {
    images: string[];
    alt?: string;
    className?: string;
}

const InteractiveImage = ({ images, alt = "Interactive Image", className = "" }: InteractiveImageProps) => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hasError, setHasError] = useState(false);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setHasError(false);
        setIndex((prev) => (prev + 1) % images.length);
    };

    const handleError = () => {
        console.warn(`InteractiveImage: Failed to load ${images[index]}. Attempting next...`);
        // If multiple images exist, try to skip the broken one
        if (images.length > 1) {
            setIndex((prev) => (prev + 1) % images.length);
        } else {
            setHasError(true);
        }
    };

    return (
        <div
            className={`relative cursor-pointer group overflow-hidden rounded-[2.5rem] shadow-2xl ${className}`}
            onClick={nextImage}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[index]}
                    src={hasError ? "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070" : images[index]}
                    alt={alt}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={handleError}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

            {/* Interaction Hint */}
            <div className={`absolute bottom-8 right-8 flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white text-sm font-bold tracking-widest uppercase transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <RefreshCw size={16} className="animate-spin-slow" />
                Click to Change
            </div>

            {/* Counter Bubble */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-xs">
                {index + 1}/{images.length}
            </div>
        </div>
    );
};

export default InteractiveImage;
