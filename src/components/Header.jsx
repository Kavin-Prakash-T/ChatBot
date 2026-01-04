import { Bot, Moon, Sparkles, Sun } from "lucide-react"

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header className="bg-white shadow-lg px-6 py-4 border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-linear-to-r from bg-purple-500 to-indigo-600 rounded-full">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">Intelligent Chat</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 px-3 py-1 rounded text-sm font-medium">
            <Sparkles className="text-indigo-600 h-4 w-4 dark:text-indigo-400" />
            <span className="text-indigo-700 text-sm font-medium dark:text-indigo-300">AI Powered</span>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full cursor-pointer bg-indigo-100 text-indigo-700 dark:text-yellow-300 dark:bg-gray-700">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header