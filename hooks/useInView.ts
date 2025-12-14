import { useState, useEffect, useRef, MutableRefObject } from 'react';

export function useInView(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Optional: Unobserve after triggering once if you only want entrance animation
                observer.unobserve(element);
            }
        }, options);

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return { ref, isInView };
}
