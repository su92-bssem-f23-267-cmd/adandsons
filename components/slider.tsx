import { useEffect, useState } from "react";

function ImageSlider() {
    const images = [
        "/crop1.jpeg",
        "/rice_crop.jpeg",
        "/rice_crop2.jpeg",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-700 mb-10 tracking-wide">
                AD & Sons Commission Shop
            </h2>

            <div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-[10px_10px_20px_#bcc0c7,-10px_-10px_20px_#ffffff]">
                <img
                    src={images[current]}
                    alt="Crop Image"
                    className="w-full h-full object-cover transition-opacity duration-700"
                />
            </div>
        </div>
    );
}
