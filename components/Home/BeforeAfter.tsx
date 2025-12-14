import React, { useState, useRef, useEffect } from 'react';

export const BeforeAfter: React.FC = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const width = rect.width;
            const percentage = Math.max(0, Math.min(100, (x / width) * 100));
            setSliderPosition(percentage);
        }
    };

    const onMouseMove = (e: React.MouseEvent) => {
        // if (isDragging) // For click and drag
        handleMove(e.clientX); // Just hover or move for immediate feedback? Plan said "draggable vertical bar". Standard is dragging.
        // Actually, simple "follows cursor" is often nicer for these. Let's do follows cursor if dragging not strictly required, but plan said "draggable".
    };

    // Implementation for draggable:
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Actually, easiest and most robust "Before/After" is using an input range overlay.
    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3">
                        <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">Our Work</span>
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">See the Difference</h2>
                        <p className="text-gray-400 mb-6">
                            From faded walls and cracked pavements to pristine finishes. Use the slider to see how we transform spaces.
                        </p>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 select-none group">
                            {/* After Image (Background) */}
                            <img
                                src="/images/home/after-wall.png" // Clean wall
                                alt="After Renovation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-xs font-bold pointer-events-none">AFTER</div>

                            {/* Before Image (Clipped) */}
                            <div
                                className="absolute inset-0 w-full h-full"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <img
                                    src="/images/home/before-wall.png" // Dirty wall example? Or similar room.
                                    alt="Before"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-xs font-bold pointer-events-none">BEFORE</div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] left-[var(--slider-pos)]"
                                style={{ '--slider-pos': `${sliderPosition}%` } as React.CSSProperties}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-red">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-red rotate-180">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </div>
                            </div>

                            {/* Interactive Range Input Overlay */}
                            <input
                                type="range"
                                aria-label="Before and after comparison slider"
                                min="0"
                                max="100"
                                value={sliderPosition}
                                onChange={handleRangeChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
