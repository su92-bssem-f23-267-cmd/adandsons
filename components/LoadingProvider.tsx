"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

interface LoadingContextType {
    setIsLoading: (loading: boolean) => void;
    isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Reset loading state when path changes
    useEffect(() => {
        setIsLoading(false);
    }, [pathname, searchParams]);

    // Function to manually set loading
    const setLoading = useCallback((loading: boolean) => {
        setIsLoading(loading);
    }, []);

    // Global click interceptor for Links
    useEffect(() => {
        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest("a");

            if (
                anchor &&
                anchor.href &&
                anchor.href.startsWith(window.location.origin) &&
                !anchor.target &&
                !event.ctrlKey &&
                !event.shiftKey &&
                !event.metaKey &&
                !event.altKey &&
                anchor.href !== window.location.href
            ) {
                setIsLoading(true);
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return (
        <LoadingContext.Provider value={{ setIsLoading: setLoading, isLoading }}>
            {children}
            <LoadingScreen isVisible={isLoading} />
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
