"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function AuthPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Placeholder for email/password auth
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setTimeout(() => {
      setLoading(false)
      setError("Email/password authentication is not implemented yet.")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
          <p className="text-gray-600">Sign in or create your account</p>
        </div>
        <div className="flex mb-6 border-b">
          <button
            className={`flex-1 py-2 font-semibold transition-colors ${tab === 'login' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 font-semibold transition-colors ${tab === 'signup' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setTab('signup')}
          >
            Sign Up
          </button>
        </div>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mb-4 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.242 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.711-1.57-3.914-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.781 0 9.594-4.055 9.594-9.766 0-.656-.07-1.148-.164-1.637z"/></svg>
          {tab === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
          {tab === 'login' && (
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          )}
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? (tab === 'login' ? 'Signing in...' : 'Signing up...') : (tab === 'login' ? 'Sign in' : 'Sign up')}
          </button>
        </form>
      </div>
    </div>
  )
} 