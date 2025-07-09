"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function SignupPage() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    // Here you would call your own API to create a user
    // For now, just show an error (since no backend is set up)
    setTimeout(() => {
      setLoading(false)
      setError("Email/password signup is not implemented yet.")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Create your account</h1>
        <p className="mb-6 text-gray-600">Sign up with your Google account or use email and password.</p>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mb-4"
        >
          Sign up with Google
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-50"
        >
          Sign up with Email
        </button>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold mb-4">Sign up with Email</h2>
              <form onSubmit={handleEmailSignup} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  {loading ? "Signing up..." : "Sign up"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 