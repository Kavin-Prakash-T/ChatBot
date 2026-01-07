import { Send } from "lucide-react"

const ChatInput = ({ input, setInput, isLoading, handleSendMessage }) => {
  return (
    <div className="bg-white border-t border-gray-200 p-4 dark:bg-gray-800 dark:border-t dark:border-gray-700">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-3">
          <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{
            if(e.key==="Enter" && !e.shiftKey){
              e.preventDefault()
              handleSendMessage()
            }
          }} 
          type="text" placeholder="type your message" className="flex-1 border bg-white border-gray-300 text-gray-900 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
          <button onClick={handleSendMessage} disabled={isLoading} className="p-3 rounded-full transition-colors shadow-md cursor-pointer">
            <Send className="text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatInput