import Link from "next/link";
import { LogIn, UserPlus, Store, Home, Users, Info } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">

      <Navbar />

      {/* Body Content */}
      <main className="pt-32 pb-20">
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <img
                  src="/Farooq.jpg"
                  alt="Agriculture Shop"
                  className="relative rounded-3xl shadow-2xl max-w-full h-auto ring-4 ring-gray-800 group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                AD & Sons Traders
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our Agriculture Commission Shop provides high-quality seeds, fertilizers, and farming equipment for modern farmers. We are committed to supporting local agriculture and improving crop yields with reliable products and expert advice.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Visit us today to explore a wide range of agricultural tools and materials, all designed to help your farm thrive. Quality products, trusted guidance, and competitive prices are guaranteed.
              </p>

              <div className="mt-4 flex gap-4">
                <Link href="/shop" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-bold text-lg shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:scale-105 transition-all">
                  <Store size={22} />
                  Visit Shop
                </Link>
                <Link href="/about" className="px-8 py-4 rounded-full bg-gray-800 text-gray-300 font-bold text-lg border-2 border-gray-600 shadow-lg hover:bg-gray-700 hover:text-white hover:border-purple-500 hover:scale-105 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Features Section - Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-gray-800/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌾</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Quality Seeds</h4>
              <p className="text-gray-400">Premium quality seeds for better crop yields and healthy plants.</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-pink-500/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-3xl">🚜</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Modern Equipment</h4>
              <p className="text-gray-400">Latest farming tools and machinery for efficient agriculture.</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-emerald-500/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Best Prices</h4>
              <p className="text-gray-400">Competitive pricing with guaranteed quality and service.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              AD & Sons Traders
            </span>
            <p className="text-gray-500 mt-2">© 2025 All Rights Reserved</p>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors hover:scale-105">Home</Link>
            <Link href="/customers" className="text-gray-400 hover:text-white transition-colors hover:scale-105">Customers</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors hover:scale-105">About Us</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
