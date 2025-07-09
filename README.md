# NextAuth.js with Google Authentication

A Next.js application with NextAuth.js and Google OAuth authentication.

## Features
- ✅ Google OAuth authentication
- ✅ Protected routes
- ✅ User profile display

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd nextAuth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set the authorized redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret

### 4. Configure environment variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

- Replace `your-google-client-id-here` and `your-google-client-secret-here` with your actual Google credentials.
- Generate a secret with: `openssl rand -base64 32`

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextAuth/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/[...nextauth]/route.ts  # NextAuth.js API route
│   │   ├── layout.tsx                       # App layout
│   │   └── page.tsx                         # Main page (UI)
│   └── components/
│       └── Providers.tsx                    # Context providers
├── public/
├── .env.local.example                       # Example env file
├── README.md
├── package.json
└── ...
```

## License

MIT 