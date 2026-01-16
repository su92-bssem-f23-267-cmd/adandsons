"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle } from "lucide-react";

const images = [
    { src: "/crop1.jpeg", title: "Premium Quality Crops" },
    { src: "/rice_crop.jpeg", title: "Fresh Rice Harvest" },
    { src: "/rice_crop2.jpg", title: "Golden Rice Fields" }
];

const features = [
    "We invest on markup with farmers to support their agricultural needs.",
    "Our investment is offered on your crops with a very low markup rate.",
    "We believe in building long-term, trustworthy partnerships with growers.",
    "By dealing with us, you get financial support at affordable terms.",
    "We also provide high-quality fertilizers to improve crop yield.",
    "Along with fertilizers, we supply effective sprays for crop protection.",
    "Our goal is to help farmers grow better and earn more profit.",
    "Work with us for reliable investment and complete agricultural solutions."
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        setTimeout(() => setIsAnimating(false), 700);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        setTimeout(() => setIsAnimating(false), 700);
    };

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-800/30 to-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Heading with Animation */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
                        <Sparkles className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">Our Services</span>
                    </div>
                    <h3 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-sm">
                        AD & Sons Commission Shop
                    </h3>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Side - Image Slider (Smaller) */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            {/* Glowing Background Effect */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-2 ring-gray-700">
                                {/* Images */}
                                <div
                                    className="flex transition-transform duration-700 ease-out"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {images.map((image, index) => (
                                        <div key={index} className="min-w-full relative">
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="w-full h-[350px] object-cover"
                                            />
                                            {/* Image Overlay with Title */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <h4 className="text-2xl font-bold text-white drop-shadow-lg">
                                                        {image.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`transition-all duration-300 ${index === currentIndex
                                                    ? "w-8 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"
                                                    : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Arrow Buttons */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-md shadow-lg flex items-center justify-center text-white hover:bg-gray-800 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-md shadow-lg flex items-center justify-center text-white hover:bg-gray-800 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight size={22} />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-sm font-medium">
                                    {currentIndex + 1} / {images.length}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
                                    🌾
                                </span>
                                Why Partner With Us?
                            </h4>
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-3 items-start group">
                                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <p className="text-gray-300 leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
