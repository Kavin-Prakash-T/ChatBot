import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import ChatMessage from './components/ChatMessage';
import { formatTime } from "../utils/chatUtils"
import LoadingIndicator from './components/Loadingindicator';
import ChatInput from './components/ChatInput';
import { fetchGeminiResponse } from './services/geminiApiService';
import { toast } from 'react-toastify';

function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState(localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : [
    {
      id: 1,
      text: "Hello, how can I help you?",
      sender: "bot",
      timestamp: new Date()
    },
  ]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSendMessage = async () => {
    if (!input.trim()) {
      toast.error("Please enter a message before sending.")
      return;
    }
    setIsLoading(true)
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date()
    }
    setMessages(prev => {
      const updated = [...prev, userMessage];
      localStorage.setItem("messages", JSON.stringify(updated));
      return updated;
    });

    const result = await fetchGeminiResponse(input);

    if (result?.error === "RATE_LIMIT") {
      toast.error(`Daily Limit Reached`);
      setIsLoading(false);
      setInput("");
      return;
    }

    if (result?.error) {
      toast.error(" Failed to get Gemini response.");
      setIsLoading(false);
      setInput("");
      return;
    }

    const botMessage = {
      id: (Date.now() + 1).toString(),
      text: result.text,
      sender: "bot",
      timestamp: new Date()
    }
    setMessages(prev => {
      const updated = [...prev, botMessage];
      localStorage.setItem("messages", JSON.stringify(updated));
      return updated;
    });

    setIsLoading(false)
    setInput("")
  }


  return (
    <div className='flex flex-col h-screen'>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className='flex-1 overflow-y-auto p-4 md:p-6'>
        <div className='max-w-5xl mx-auto space-y-4'>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} formatTime={formatTime} />
          ))}
          {isLoading && <LoadingIndicator />}
        </div>
      </div>
      <ChatInput input={input} setInput={setInput} isLoading={isLoading} handleSendMessage={handleSendMessage} />
    </div>
  )
}

export default App
