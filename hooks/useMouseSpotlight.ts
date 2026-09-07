"use client";

import { useRef, useCallback } from "react";

export function useMouseSpotlight() {
    const ref = useRef<HTMLDivElement>(null);
    const spotRef = useRef<HTMLDivElement>(null);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !spotRef.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(94,106,210,0.12), transparent 80%)`;
        spotRef.current.style.opacity = "1";
    }, []);

    const onMouseLeave = useCallback(() => {
        if (spotRef.current) spotRef.current.style.opacity = "0";
    }, []);

    return { ref, spotRef, onMouseMove, onMouseLeave };
}
