import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import ChatMessage from './components/ChatMessage';
import { formatTime } from "../utils/chatUtils"
import LoadingIndicator from './components/Loadingindicator';

function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([
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



  return (
    <div className='flex flex-col h-screen'>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className='flex-1 overflow-y-auto p-4 md:p-6'>
        <div className='max-w-5xl mx-auto space-y-4'>
          <ChatMessage messages={messages} formatTime={formatTime} />
          {isLoading && <LoadingIndicator />}
        </div>
      </div>
    </div>
  )
}

export default App
