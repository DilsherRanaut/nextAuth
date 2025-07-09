'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  // Facebook-style login/signup state
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

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('Sign out error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              NextAuth.js
            </h1>
            <p className="text-gray-600">
              Authentication with Google 
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-[100px] h-[100px] mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200 relative">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                ) : null}
                <div className={`w-full h-full bg-gray-300 flex items-center justify-center absolute inset-0 ${session.user?.image ? 'fallback hidden' : ''}`}>
                  <span className="text-gray-600 text-4xl font-semibold">
                    {session.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Welcome, {session.user?.name}!
              </h2>
              <p className="text-gray-600 mt-2">
                {session.user?.email}
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={handleSignOut}
                disabled={isLoading}
                className="w-[170px] mx-auto bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-[5px] px-[15px] pl-[5px] rounded-full border border-gray-300 transition duration-200 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing out...
                  </>
                ) : (
                  <span>Sign Out</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Original homepage unauthenticated UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            NextAuth.js
          </h1>
          <p className="text-gray-600">
            Authentication with Google
          </p>
        </div>
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Sign in with your Google account to get started
            </p>
          </div>
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-[170px] mx-auto bg-white hover:bg-gray-50 disabled:bg-gray-100 text-gray-700 font-semibold py-[5px] px-[15px] pl-[5px] rounded-full border border-gray-300 transition duration-200 flex items-center justify-between"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600 mr-2"></div>
                Signing in...
              </>
            ) : (
              <>
                <svg className="w-[25px] h-[25px]" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
} 