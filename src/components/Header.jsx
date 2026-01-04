import { Bot, Sparkles, Sun } from "lucide-react"

const Header = () => {
  return (
    <header className="flex items-center justify-around w-full mx-auto p-3">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-linear-to-r from bg-purple-500 to-indigo-600 rounded-full">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-xl font-bold">Intelligent Chat</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 px-3 py-1 rounded text-sm font-medium">
          <Sparkles />
          <span>AI Powered</span>
        </div>
        <button>
          <Sun />
        </button>
      </div>
    </header>
  )
}

export default Header