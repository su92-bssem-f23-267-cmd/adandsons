import Link from "next/link";
import { ArrowLeft, Store, Leaf, FlaskConical, Tractor, Package } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Premium Wheat Seeds",
        category: "Seeds",
        price: "Rs. 2,500/bag",
        icon: Leaf,
        color: "from-amber-500 to-orange-500",
        description: "High-yield wheat seeds for maximum harvest"
    },
    {
        id: 2,
        name: "Urea Fertilizer",
        category: "Fertilizers",
        price: "Rs. 3,200/bag",
        icon: FlaskConical,
        color: "from-blue-500 to-cyan-500",
        description: "Premium quality urea for better crop growth"
    },
    {
        id: 3,
        name: "DAP Fertilizer",
        category: "Fertilizers",
        price: "Rs. 8,500/bag",
        icon: FlaskConical,
        color: "from-green-500 to-emerald-500",
        description: "Diammonium phosphate for healthy plants"
    },
    {
        id: 4,
        name: "Pesticide Spray",
        category: "Sprays",
        price: "Rs. 1,800/bottle",
        icon: Package,
        color: "from-red-500 to-rose-500",
        description: "Effective pest control solution"
    },
    {
        id: 5,
        name: "Rice Seeds",
        category: "Seeds",
        price: "Rs. 4,200/bag",
        icon: Leaf,
        color: "from-emerald-500 to-teal-500",
        description: "Premium basmati rice seeds"
    },
    {
        id: 6,
        name: "Farming Tools Kit",
        category: "Equipment",
        price: "Rs. 12,000/set",
        icon: Tractor,
        color: "from-purple-500 to-pink-500",
        description: "Complete farming tools kit"
    }
];

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">

            {/* Header */}
            <header className="bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700 py-6">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                            <Store className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Our Shop
                        </h1>
                    </div>
                    <div className="w-24"></div>
                </div>
            </header>

            <main className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Hero Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Quality Agricultural Products
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore our range of premium seeds, fertilizers, and farming equipment at competitive prices.
                        </p>
                    </section>

                    {/* Products Grid */}
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {products.map((product) => {
                            const IconComponent = product.icon;
                            return (
                                <div
                                    key={product.id}
                                    className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300"
                                >
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm font-medium mb-2">
                                        {product.category}
                                    </span>

                                    {/* Product Info */}
                                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-gray-400 mb-4">{product.description}</p>

                                    {/* Price */}
                                    <div className="flex items-center justify-between">
                                        <span className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                                            {product.price}
                                        </span>
                                        <button className={`px-4 py-2 rounded-full bg-gradient-to-r ${product.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all`}>
                                            Inquire
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    {/* Contact CTA */}
                    <section className="bg-gray-800 rounded-3xl p-12 text-white text-center border border-gray-700">
                        <h3 className="text-3xl font-bold mb-4">Need Help Choosing?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Contact us for personalized recommendations based on your farming needs. We're here to help!
                        </p>
                        <a
                            href="https://wa.me/+923029594350"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 text-white py-8 mt-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-gray-500">© 2025 AD & Sons Traders. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
