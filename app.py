"""
Simple Flask backend to serve the VibeMic frontend and provide a few demo JSON endpoints.
- Serves static files from backend/static
- Provides a few API endpoints that return in-memory data (songs, playlists, rooms)
"""

import json
from flask import Flask, send_from_directory, jsonify, request, abort
from flask_cors import CORS
import os
from datetime import datetime

app = Flask(__name__, static_folder="static", static_url_path="")
CORS(app)  # allow all origins for development/demo

# ---------------------------
# Demo data (Hindi famous song metadata; audio files are local placeholders)
# Covers use online images (unsplash / pixabay / public images) embedded in HTML/JS
# ---------------------------
SONGS = [
    {
        "id": 1,
        "title": "Tum Hi Ho (demo)",
        "artist": "Arijit Singh",
        # covers are online images (unsplash) — used in index.html / script.js directly
        "cover_url": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=60",
        "file_url": "/assets/audio/kahani_1.mp3",
        "duration": 250,
        "mood": "heartbreak"
    },
    {
        "id": 2,
        "title": "Tera Ban Jaunga (demo)",
        "artist": "Akhil & Tulsi Kumar",
        "cover_url": "https://images.unsplash.com/photo-1519996524122-3d8d5a4b3a94?w=800&q=60",
        "file_url": "/assets/audio/kahani_2.mp3",
        "duration": 210,
        "mood": "happy"
    },
    {
        "id": 3,
        "title": "Kesariya (demo)",
        "artist": "Arijit Singh",
        "cover_url": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=60",
        "file_url": "/assets/audio/kahani_3.mp3",
        "duration": 230,
        "mood": "happy"
    },
    {
        "id": 4,
        "title": "Channa Mereya (demo)",
        "artist": "Arijit Singh",
        "cover_url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=60",
        "file_url": "/assets/audio/kahani_4.mp3",
        "duration": 260,
        "mood": "heartbreak"
    },
    {
        "id": 5,
        "title": "Bekhayali (demo)",
        "artist": "Sachet–Parampara",
        "cover_url": "https://images.unsplash.com/photo-1526178613575-8a7f0a1b5f6f?w=800&q=60",
        "file_url": "/assets/audio/kahani_5.mp3",
        "duration": 245,
        "mood": "sad"
    },
    {
        "id": 6,
        "title": "Dil Diyan Gallan (demo)",
        "artist": "Atif Aslam",
        "cover_url": "https://images.unsplash.com/photo-1528357852361-2c1b5f6f0d2a?w=800&q=60",
        "file_url": "/assets/audio/kahani_6.mp3",
        "duration": 200,
        "mood": "chill"
    }
]

PLAYLISTS = [
    {"id": 1, "title": "Bollywood Classics (demo)", "description": "Golden-era hits and emotional tracks", "cover_url": SONGS[0]["cover_url"], "tag": "Bollywood", "song_ids": [1,4,5]},
    {"id": 2, "title": "Romantic Hits (demo)", "description": "Slow and soulful", "cover_url": SONGS[2]["cover_url"], "tag": "Romance", "song_ids": [1,2,6]},
    {"id": 3, "title": "Chill Evening (demo)", "description": "Lo-fi vibes & soft vocals", "cover_url": SONGS[5]["cover_url"], "tag": "Chill", "song_ids": [3,5,6]}
]

# Party rooms in-memory
ROOMS = [
    {"id": 1, "name": "Mood Ring Room", "description": "Change the vibe with votes", "listeners_count": 20, "mic_holder": None, "now_playing": 1, "queue": ["Rohan","Anita"], "chain": []},
    {"id": 2, "name": "Bollywood Bash", "description": "Dance and sing along", "listeners_count": 45, "mic_holder": None, "now_playing": 2, "queue": ["DJrajeev"], "chain": []},
    {"id": 3, "name": "Lo-Fi Lounge", "description": "Study beats and mellow", "listeners_count": 8, "mic_holder": None, "now_playing": 6, "queue": [], "chain": []}
]

CHAT_MESSAGES = [
    {"id":1,"user":"HostBot","message":"Welcome to VibeMic demo!","timestamp": datetime.utcnow().isoformat()}
]

MOOD_VOTES = {"happy":0,"sad":0,"hype":0,"chill":0,"heartbreak":0}

# ---------------------------
# Static routes
# ---------------------------
@app.route("/")
def index():
    return send_from_directory("static", "index.html")

# Serve assets under /assets/...
@app.route("/assets/<path:filename>")
def assets(filename):
    return send_from_directory(os.path.join("static","assets"), filename)

# Also serve other static files (css/js)
@app.route("/<path:fname>")
def static_files(fname):
    # security: only serve files from static
    safe = os.path.join("static", fname)
    if os.path.exists(safe):
        return send_from_directory("static", fname)
    return abort(404)

# ---------------------------
# API endpoints (demo, in-memory)
# ---------------------------
@app.route("/api/songs", methods=["GET"])
def api_songs():
    return jsonify({"status":"ok","data":SONGS})

@app.route("/api/songs/<int:song_id>", methods=["GET"])
def api_song(song_id):
    s = next((x for x in SONGS if x["id"]==song_id), None)
    if not s:
        return jsonify({"status":"error","data":"not found"}), 404
    return jsonify({"status":"ok","data":s})

@app.route("/api/playlists", methods=["GET"])
def api_playlists():
    return jsonify({"status":"ok","data":PLAYLISTS})

@app.route("/api/party/rooms", methods=["GET"])
def api_rooms():
    return jsonify({"status":"ok","data":ROOMS})

@app.route("/api/party/rooms/<int:room_id>/grab", methods=["POST"])
def api_grab(room_id):
    body = request.get_json() or {}
    user = body.get("user")
    if not user:
        return jsonify({"status":"error","data":"user required"}), 400
    room = next((r for r in ROOMS if r["id"]==room_id), None)
    if not room:
        return jsonify({"status":"error","data":"room not found"}), 404
    if room["mic_holder"]:
        return jsonify({"status":"error","data":{"reason":"busy","mic_holder":room["mic_holder"]}}), 409
    room["mic_holder"] = user
    return jsonify({"status":"ok","data":room})

@app.route("/api/chat/send", methods=["POST"])
def api_chat_send():
    body = request.get_json() or {}
    user = body.get("user","You")
    msg = body.get("message")
    if not msg:
        return jsonify({"status":"error","data":"message required"}), 400
    cm = {"id": len(CHAT_MESSAGES)+1, "user":user, "message":msg, "timestamp": datetime.utcnow().isoformat()}
    CHAT_MESSAGES.append(cm)
    return jsonify({"status":"ok","data":cm})

@app.route("/api/chat", methods=["GET"])
def api_chat_list():
    return jsonify({"status":"ok","data":CHAT_MESSAGES})

@app.route("/api/mood/vote", methods=["POST"])
def api_vote():
    body = request.get_json() or {}
    mood = body.get("mood")
    if mood not in MOOD_VOTES:
        return jsonify({"status":"error","data":"invalid mood"}), 400
    MOOD_VOTES[mood] += 1
    dominant = max(MOOD_VOTES.items(), key=lambda kv: kv[1])[0]
    return jsonify({"status":"ok","data":{"dominant":dominant,"counts":MOOD_VOTES}})

# ---------------------------
# Run
# ---------------------------
if __name__ == "__main__":
    # ensure assets folder exists
    os.makedirs(os.path.join("static","assets","audio"), exist_ok=True)
    os.makedirs(os.path.join("static","assets","covers"), exist_ok=True)
    print("VibeMic demo running on http://127.0.0.1:5000")
    app.run(debug=True)
