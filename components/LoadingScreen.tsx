"use client";

import React from "react";

const LoadingScreen: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-500 animate-in fade-in">
            <div className="relative flex flex-col items-center gap-6">
                {/* Animated Rings */}
                <div className="absolute -inset-10 flex items-center justify-center pointer-events-none">
                    <div className="w-40 h-40 border-4 border-purple-500/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
                    <div className="absolute w-32 h-32 border-4 border-pink-500/30 rounded-full animate-[ping_2s_linear_infinite]"></div>
                </div>

                {/* Logo Container */}
                <div className="relative p-2 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-2xl animate-bounce">
                    <div className="bg-gray-900 rounded-xl p-3 flex items-center justify-center">
                        <img
                            src="/Ad_Sons-removebg-preview.png"
                            alt="Loading Logo"
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Text Branding */}
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent tracking-tighter animate-pulse">
                        AD & Sons
                    </h2>
                    <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-sm mt-1 animate-pulse">
                        Traders
                    </p>
                </div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 w-1/3 animate-[loading-bar_1.5s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); width: 30%; }
          50% { width: 60%; }
          100% { transform: translateX(400%); width: 30%; }
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
