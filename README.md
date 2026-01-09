# 🤖 AI ChatBot

A modern, responsive chatbot application built with React and powered by Google's Gemini API.

## ✨ Features

- 💬 Real-time chat interface
- 🌓 Dark/light mode toggle with persistent settings
- 🎨 Modern UI styled with Tailwind CSS
- ⚡ Fast performance with Vite
- 🚨 Toast notifications for user feedback
- 🧠 AI-powered responses using Gemini API

## 🚀 Getting Started

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env` file

## 🛠️ Tech Stack

- React 19 & Vite
- Tailwind CSS
- Google Generative AI (Gemini API)
- Lucide React (Icons)
- React Toastify

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
