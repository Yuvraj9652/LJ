# backend/app.py
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Demo routes (static responses)
@app.route("/")
def home():
    return "SkillSwap Backend Running (Demo)"

@app.route("/api/login", methods=["POST"])
def login():
    return jsonify({"status": "success", "message": "Demo login successful"})

@app.route("/api/signup", methods=["POST"])
def signup():
    return jsonify({"status": "success", "message": "Demo signup successful"})

@app.route("/api/match", methods=["GET"])
def match():
    # Demo match response
    return jsonify({
        "matches": [
            {"teacher": "Alice", "learner": "Bob", "skill": "Python Basics"},
            {"teacher": "Charlie", "learner": "Dana", "skill": "Guitar"}
        ]
    })

if __name__ == "__main__":
    app.run(debug=True)
