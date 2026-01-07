import { Bot, User } from "lucide-react"

const ChatMessage = ({message,formatTime}) => {
  return (
    <div className={`flex ${message.sender==='user'?"justify-end":"justify-start"}`}>
        <div className={`flex max-w-[80%] md:max-w-[70%] rounded-2xl p-5 py-3.5 ${message.sender==='user'?"bg-linear-to-r from-indigo-600 to-purple-600  text-white shadow-md":"bg-white text-gray-800 shadow-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"}`}>
            <div className={`shrink-0 mr-3 ${message.sender==='user'?"text-indigo-200":"text-indigo-600 dark:text-indigo-400"}`}>
                {message.sender==='user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
            </div>
            <div className="flex-1">
                <div className="mb-1 flex justify-between items-center">
                    <span className="font-medium mr-3">
                        {message.sender==='user' ? "You" : "AI Assistant"}
                    </span>
                    <span className={`text-xs ${message.sender==='user'? "opacity-70": "text-gray-500 dark:text-gray-400"}`}>
                        {formatTime(message.timestamp)}
                    </span>
                </div>
                <p className="text-sm md:text-base whitespace-pre-wrap wrap-break-word leading-relaxed">{message.text}</p>
            </div>
        </div>
    </div>
  )
}

export default ChatMessage