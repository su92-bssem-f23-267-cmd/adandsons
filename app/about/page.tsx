import Link from "next/link";
import { MapPin, Phone, Mail, Award, Target, Heart, ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">

            {/* Header */}
            <header className="bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700 py-6">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                        About Us
                    </h1>
                    <div className="w-24"></div>
                </div>
            </header>

            <main className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Hero Section */}
                    <section className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                            <Heart className="w-5 h-5 text-pink-400" />
                            <span className="text-purple-400 font-semibold">Our Story</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
                            AD & Sons Traders
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We are a trusted agriculture commission shop dedicated to empowering farmers with quality products, financial support, and expert guidance for over two decades.
                        </p>
                    </section>

                    {/* Image Section - Separate */}
                    <section className="mb-20">
                        <div className="flex justify-center">
                            <div className="relative group max-w-2xl">
                                <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <img
                                    src="/Farooq.jpg"
                                    alt="AD & Sons Traders Shop"
                                    className="relative rounded-3xl shadow-2xl w-full ring-4 ring-gray-700"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Story Section - Separate */}
                    <section className="mb-24">
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-700">
                            <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Journey</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        AD & Sons Traders started as a small family business with a vision to support local farmers. Today, we have grown into a comprehensive agricultural solutions provider, serving hundreds of farmers across the region.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        We believe in building long-term relationships based on trust, transparency, and mutual growth. Our commitment to quality and fair practices has made us a preferred partner for farmers seeking reliable agricultural support.
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex justify-center gap-12 mt-12 pt-10 border-t border-gray-700">
                                <div className="text-center">
                                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20+</div>
                                    <div className="text-gray-500 mt-2">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">500+</div>
                                    <div className="text-gray-500 mt-2">Happy Farmers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">100%</div>
                                    <div className="text-gray-500 mt-2">Trusted Service</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Values */}
                    <section className="mb-24">
                        <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Our Core Values
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-2xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-purple-500/50 transition-all group text-center">
                                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Quality First</h4>
                                <p className="text-gray-400">We never compromise on the quality of our products and services.</p>
                            </div>

                            <div className="p-8 rounded-2xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-pink-500/50 transition-all group text-center">
                                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Farmer Focused</h4>
                                <p className="text-gray-400">Every decision we make puts farmers' interests at the center.</p>
                            </div>

                            <div className="p-8 rounded-2xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-emerald-500/50 transition-all group text-center">
                                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Trust & Integrity</h4>
                                <p className="text-gray-400">Building lasting relationships through honest and ethical practices.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Info */}
                    <section className="bg-gray-800 rounded-3xl p-12 text-white border border-gray-700">
                        <h3 className="text-3xl font-bold text-center mb-10">Get In Touch</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex items-center gap-4 justify-center">
                                <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center">
                                    <MapPin className="w-7 h-7 text-purple-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">Location</div>
                                    <div className="text-gray-400">Choki Sukheki, District HafizAbad</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center">
                                <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center">
                                    <Phone className="w-7 h-7 text-pink-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">Phone</div>
                                    <div className="text-gray-400">0302-9594350</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center">
                                <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center">
                                    <Mail className="w-7 h-7 text-orange-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">Email</div>
                                    <div className="text-gray-400">info@adsons.com</div>
                                </div>
                            </div>
                        </div>
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
