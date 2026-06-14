/**
 * Chatbot service that calls a local Flask API by default and falls back to a
 * lightweight local rule-based response if the server is unavailable.
 */

const API_URL = import.meta.env?.VITE_CHATBOT_API_URL || 'http://127.0.0.1:5000/chat'

const KNOWLEDGE_BASE = [
  {
    keywords: ['who', 'navesh', 'about you', 'yourself'],
    answer:
      "Navesh S is a Software Professional at TCS, with an MCA from Anna University and a B.Sc in Computer Science from VET Institute of Arts and Science. He's based in Chennai, Tamil Nadu, India.",
  },
  {
    keywords: ['work', 'job', 'role', 'tcs', 'company', 'experience'],
    answer:
      'Navesh currently works as a Software Professional at TCS, focusing on enterprise applications, SQL Server, production support, and Python-based automation. He also has hands-on experience with AI/ML research projects.',
  },
  {
    keywords: ['education', 'degree', 'mca', 'bsc', 'study', 'college', 'university'],
    answer:
      'Navesh holds an MCA from Anna University (2022–2024) and a B.Sc in Computer Science from VET Institute of Arts and Science (2018–2021).',
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technology', 'language', 'tools'],
    answer:
      'His core skills span Frontend (React, JavaScript, Tailwind CSS), Backend (Python, Django, Flask, Node.js), Databases (SQL Server, MySQL, PostgreSQL), AI/ML (TensorFlow, OpenCV, Deep Learning), Cloud (Azure, AWS basics) and DevOps (Git, GitHub, Jenkins, CI/CD).',
  },
  {
    keywords: ['project', 'portfolio', 'work samples', 'built'],
    answer:
      'Some highlighted projects include an AI-powered resume screener, a real-time object detection system using OpenCV, an enterprise automation suite for SQL Server tasks, and this glassmorphism portfolio itself. Check the Projects section for more!',
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect'],
    answer:
      "You can reach Navesh through the Contact section below, or connect via GitHub (naveshs2002) and LinkedIn — links are in the navbar and footer.",
  },
  {
    keywords: ['resume', 'cv', 'download'],
    answer:
      'You can download his resume using the "Download Resume" button in the Hero section at the top of the page.',
  },
  {
    keywords: ['interest', 'passion', 'goal', 'ai', 'machine learning', 'cloud', 'devops'],
    answer:
      "Navesh is especially interested in Artificial Intelligence, Machine Learning, Full Stack Development, Cloud Computing, DevOps, and Automation — and is always exploring ways to combine these in real projects.",
  },
  {
    keywords: ['location', 'where', 'chennai', 'based', 'live'],
    answer: 'Navesh is based in Chennai, Tamil Nadu, India.',
  },
]

const FALLBACK_ANSWER =
  "I'm a simple assistant for this portfolio! Try asking about Navesh's skills, projects, education, work experience, or how to get in touch."

const GREETINGS = ['hi', 'hello', 'hey', 'hii', 'yo']

function getLocalReply(message) {
  const normalized = message.trim().toLowerCase()

  if (GREETINGS.some((g) => normalized === g || normalized.startsWith(g + ' '))) {
    return "Hey there! 👋 I'm Navesh's portfolio assistant. Ask me about his skills, projects, experience, or how to get in touch."
  }

  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return entry.answer
    }
  }

  return FALLBACK_ANSWER
}

/**
 * Generate a response for a given user message.
 * @param {string} message
 * @returns {Promise<string>}
 */
export async function getChatbotResponse(message) {
  if (!message || typeof message !== 'string') {
    return FALLBACK_ANSWER
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const data = await response.json()
    if (data?.reply) {
      return data.reply
    }
  } catch (error) {
    console.warn('Falling back to local chatbot logic:', error)
  }

  return getLocalReply(message)
}
