import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'

function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode')==='true' || false);

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
    </div>
  )
}

export default App
