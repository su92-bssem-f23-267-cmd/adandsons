"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, Mail, Lock, User, ArrowLeft, Loader2 } from "lucide-react";

export default function SignupCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-6">
      {/* Back Button */}
      <Link href="/" className="fixed top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl blur-xl opacity-30"></div>

          <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-700">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Create Account
              </h2>
              <p className="text-gray-400 mt-2">Join AD & Sons Traders today</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-4 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm text-center">
                {success}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                />
              </div>

              <label className="flex items-start gap-3 text-gray-400 cursor-pointer text-sm mt-4">
                <input type="checkbox" required className="w-4 h-4 mt-0.5 rounded border-gray-600 text-emerald-600 focus:ring-emerald-500 bg-gray-800" />
                <span>I agree to the <a href="#" className="text-emerald-400 hover:text-teal-400 font-medium">Terms of Service</a> and <a href="#" className="text-emerald-400 hover:text-teal-400 font-medium">Privacy Policy</a></span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    <UserPlus size={20} />
                    Create Account
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-orange-400 transition-all">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
