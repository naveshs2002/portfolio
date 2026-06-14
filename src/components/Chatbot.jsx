import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'
import { getChatbotResponse } from '../services/chatbot'

const WELCOME_MESSAGE = {
  role: 'bot',
  text:
    "Hi! 👋 I'm Navesh's portfolio assistant. Ask me about his skills, projects, education, or how to get in touch.",
}

const Chatbot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const handleSend = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setTyping(true)

    const reply = await getChatbotResponse(text)
    setTyping(false)
    setMessages((prev) => [...prev, { role: 'bot', text: reply }])
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-strong mb-4 flex h-[28rem] w-[20rem] flex-col overflow-hidden rounded-2xl shadow-glow sm:w-[22rem]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  Portfolio Assistant
                </p>
                <p className="text-xs text-slate-400">Ask me about Navesh</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="glass flex h-8 w-8 items-center justify-center rounded-full text-sm"
                aria-label="Close chat"
              >
                <FiX />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'ml-auto bg-gradient-to-r from-primary/30 to-secondary/30 text-white'
                      : 'glass text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div className="glass max-w-[60%] rounded-2xl px-4 py-2 text-sm text-slate-400">
                  Typing...
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:outline-none"
              />
              <button
                type="submit"
                className="hover-glow glass flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-primary"
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hover-glow glass-strong flex h-14 w-14 items-center justify-center rounded-full text-2xl text-primary shadow-glow"
        aria-label="Toggle chat assistant"
      >
        {open ? <FiX /> : <FiMessageSquare />}
      </motion.button>
    </div>
  )
}

export default Chatbot
