"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function FacebookLoginPage() {
  const [showSignup, setShowSignup] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setTimeout(() => {
      setLoading(false)
      setError("Email/password login is not implemented yet.")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-4">
        {/* Left: Branding */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-12">
          <h1 className="text-blue-600 text-5xl font-extrabold mb-4 font-sans">facebook</h1>
          <p className="text-2xl text-gray-700 font-semibold max-w-xs">Connect with friends and the world around you on Facebook.</p>
        </div>
        {/* Right: Login Form */}
        <div className="flex-1 max-w-sm w-full bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575m1.875-2.425A9.956 9.956 0 0112 3c5.523 0 10 4.477 10 10 0 1.657-.403 3.22-1.125 4.575m-1.875 2.425A9.956 9.956 0 0112 21c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.687 1.664-1.208 2.392" /></svg>
                )}
              </button>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-3 rounded-md transition duration-200"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">Forgotten password?</a>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <button
            onClick={() => setShowSignup(true)}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 rounded-md transition duration-200"
          >
            Create new account
          </button>
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full mt-3 bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.242 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.711-1.57-3.914-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.781 0 9.594-4.055 9.594-9.766 0-.656-.07-1.148-.164-1.637z"/></svg>
            Continue with Google
          </button>
        </div>
      </div>
      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setShowSignup(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="New password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 