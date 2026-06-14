from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

KNOWLEDGE_BASE = [
    {
        "keywords": ["who", "navesh", "about you", "yourself"],
        "answer": "Navesh S is a Software Professional at TCS, with an MCA from Anna University and a B.Sc in Computer Science from VET Institute of Arts and Science. He's based in Chennai, Tamil Nadu, India.",
    },
    {
        "keywords": ["work", "job", "role", "tcs", "company", "experience"],
        "answer": "Navesh currently works as a Software Professional at TCS, focusing on enterprise applications, SQL Server, production support, and Python-based automation. He also has hands-on experience with AI/ML research projects.",
    },
    {
        "keywords": ["education", "degree", "mca", "bsc", "study", "college", "university"],
        "answer": "Navesh holds an MCA from Anna University (2022–2024) and a B.Sc in Computer Science from VET Institute of Arts and Science (2018–2021).",
    },
    {
        "keywords": ["skill", "tech", "stack", "technology", "language", "tools"],
        "answer": "His core skills span Frontend (React, JavaScript, Tailwind CSS), Backend (Python, Django, Flask, Node.js), Databases (SQL Server, MySQL, PostgreSQL), AI/ML (TensorFlow, OpenCV, Deep Learning), Cloud (Azure, AWS basics) and DevOps (Git, GitHub, Jenkins, CI/CD).",
    },
    {
        "keywords": ["project", "portfolio", "work samples", "built"],
        "answer": "Some highlighted projects include an AI-powered resume screener, a real-time object detection system using OpenCV, an enterprise automation suite for SQL Server tasks, and this glassmorphism portfolio itself. Check the Projects section for more!",
    },
    {
        "keywords": ["contact", "email", "reach", "hire", "connect"],
        "answer": "You can reach Navesh through the Contact section below, or connect via GitHub (naveshs2002) and LinkedIn — links are in the navbar and footer.",
    },
    {
        "keywords": ["resume", "cv", "download"],
        "answer": "You can download his resume using the \"Download Resume\" button in the Hero section at the top of the page.",
    },
    {
        "keywords": ["interest", "passion", "goal", "ai", "machine learning", "cloud", "devops"],
        "answer": "Navesh is especially interested in Artificial Intelligence, Machine Learning, Full Stack Development, Cloud Computing, DevOps, and Automation — and is always exploring ways to combine these in real projects.",
    },
    {
        "keywords": ["location", "where", "chennai", "based", "live"],
        "answer": "Navesh is based in Chennai, Tamil Nadu, India.",
    },
]

GREETINGS = ["hi", "hello", "hey", "hii", "yo"]
FALLBACK_ANSWER = "I'm a simple assistant for this portfolio! Try asking about Navesh's skills, projects, education, work experience, or how to get in touch."


def get_reply(message: str) -> str:
    normalized = message.strip().lower()

    if any(normalized == greeting or normalized.startswith(greeting + " ") for greeting in GREETINGS):
        return "Hey there! 👋 I'm Navesh's portfolio assistant. Ask me about his skills, projects, experience, or how to get in touch."

    for entry in KNOWLEDGE_BASE:
        if any(keyword in normalized for keyword in entry["keywords"]):
            return entry["answer"]

    return FALLBACK_ANSWER


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(silent=True) or {}
    message = data.get("message", "")
    return jsonify({"reply": get_reply(message)})


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
