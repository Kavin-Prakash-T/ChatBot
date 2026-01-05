import { Bot } from "lucide-react"

const LoadingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-white text-gray-800 shadow-md rounded-2xl px-5 max-w-[80%] md:max-w-[70%] dark:bg-gray-800 dark:text-gray-100 dark:border dark:border-gray-700">
           <div className="flex items-center space-x-3">
            <Bot className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce dark:bg-gray-500" style={{animationDelay:'0ms'}}></div>
                <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce dark:bg-gray-500" style={{animationDelay:'150ms'}}></div>
                <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce dark:bg-gray-500" style={{animationDelay:'300ms'}}></div>
            </div>
           </div>
      </div>
    </div>
  )
}

export default LoadingIndicator