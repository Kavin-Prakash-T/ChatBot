import { Bot, User } from "lucide-react"

const ChatMessage = ({messages,formatTime}) => {
  return (
    <div className={`${messages.sender==='user'?"justify-end":"justify-start"}`}>
        <div className={`flex max-w-[80%] md:max-w-[70%] rounded-2xl p-5 py-3.5 ${messages.sender==='user'?"bg-linear-to-r from-indigo-600 to-purple-600  text-white shadow-md":"bg-white text-gray-800 shadow-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"}`}>
            <div className={`shrink-0 mr-3 ${messages.sender==='user'?"text-indigo-200":"text-indigo-600 dark:text-indigo-400"}`}>
                {messages.sender==='user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
            </div>
            <div className="flex-1">
                <div className="mb-1 flex justify-between items-center">
                    <span className="font-medium">
                        {messages.sender==='user' ? "You" : "AI Assistant"}
                    </span>
                    <span className={`text-xs ${messages.sender==='user'? "opacity-70": "text-gray-500 dark:text-gray-400"}`}>
                        {formatTime(messages[0].timestamp)}
                    </span>
                </div>
                <p className="text-sm md:text-base whitespace-pre-wrap wrap-break-word leading-relaxed">{messages[0].text}</p>
            </div>
        </div>
    </div>
  )
}

export default ChatMessage