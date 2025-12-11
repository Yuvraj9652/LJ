/* VibeMic v2.0 — Frontend only, Bootstrap-based, premium UI
   - Everything simulated in JS
   - SpeechRecognition for Chrome (live transcription + simple scoring)
   - Party modal with mic grab simulation
   - Mood votes, chat, playlists, songs stored in arrays
*/

/* ---------------------------
   Dummy data (songs, playlists, rooms)
   --------------------------- */
const songs = [{
        id: 1,
        title: "Midnight Echoes",
        artist: "Neon Skyline",
        cover: "assets/covers/cover1.png",
        file: "assets/audio/midnight_echoes.mp3",
        duration: 213,
        mood: "chill",
        lyrics: [
            "Streetlights fade, the night's awake",
            "I chase the echo of mistakes",
            "Your distant voice, a neon trace",
            "We dance in static, pixelated grace",
            "",
            "Under midnight echoes, I still hear your name",
            "Every little shadow sings our old refrain",
            "If I close my eyes, I'm standing in the rain",
            "Falling for you, over again"
        ]
    },
    {
        id: 2,
        title: "City Lights",
        artist: "Skyline Drive",
        cover: "assets/covers/cover2.png",
        file: "assets/audio/city_lights.mp3",
        duration: 198,
        mood: "happy",
        lyrics: [
            "Racing through the city, windows down low",
            "Laughing at the signs we don’t quite know",
            "Our playlist stuck on summer's first hello",
            "Every red light turns to gold",
            "",
            "Under city lights, we glow like we own the night"
        ]
    },
    {
        id: 3,
        title: "Heart on Replay",
        artist: "Nova Souls",
        cover: "assets/covers/cover3.png",
        file: "assets/audio/heart_on_replay.mp3",
        duration: 242,
        mood: "heartbreak",
        lyrics: ["I left your sweater on the chair", "The one you said you'd come to share", "The coffee's cold, the room's too bare"]
    },
    {
        id: 4,
        title: "Rooftop Anthem",
        artist: "Golden Hour",
        cover: "assets/covers/cover4.png",
        file: "assets/audio/rooftop_anthem.mp3",
        duration: 226,
        mood: "hype",
        lyrics: ["Feet on the rooftop, city in our hands", "We turn up the speaker, we’re our own band", "It's our rooftop anthem"]
    },
    {
        id: 5,
        title: "Cloudwalking",
        artist: "LoFi Memoirs",
        cover: "assets/covers/cover5.png",
        file: "assets/audio/cloudwalking.mp3",
        duration: 204,
        mood: "chill",
        lyrics: ["Floating over sidewalks, thoughts in slow-motion", "Turning little heartaches into devotion", "Clouds beneath my sneakers"]
    },
    {
        id: 6,
        title: "Rainy Metro",
        artist: "Monsoon Loops",
        cover: "assets/covers/cover6.png",
        file: "assets/audio/rainy_metro.mp3",
        duration: 189,
        mood: "sad",
        lyrics: ["Umbrellas bloom along the line", "Your station's now two stops from mine", "This rainy metro holds our ghosted plans"]
    }
];

const playlists = [
    { id: "late-night", title: "Late-Night Loops", description: "Lo-fi beats & late coding vibes", cover: "assets/covers/cover5.png", tag: "Lo-Fi · Chill", song_ids: [1, 5] },
    { id: "bolly-vibes", title: "Bollywood Vibe Check", description: "Desi party bangers", cover: "assets/covers/cover2.png", tag: "Bollywood · Party", song_ids: [2, 3] },
    { id: "throwback", title: "Throwback Night", description: "Sing-alongs & nostalgia", cover: "assets/covers/cover3.png", tag: "Classic · Hits", song_ids: [4] }
];

let rooms = [
    { id: 1, slug: "mood-ring", name: "Mood Ring Room", description: "Change the vibe with every vote.", listeners_count: 18, mic_holder: null, queue: ["PartyPanda", "KaraKing"], chain: [{ id: 1, user: "SparkleFox", line_text: "Queued 2" }], now_playing: 2 },
    { id: 2, slug: "bolly-bash", name: "Bollywood Bash", description: "Desi bangers & hooks.", listeners_count: 32, mic_holder: null, queue: ["MicrophoneMitra"], chain: [{ id: 1, user: "DesiDrop", line_text: "Queued 2" }], now_playing: 3 },
    { id: 3, slug: "lofi-lounge", name: "Lo-Fi Lounge", description: "Soft beats and kind words.", listeners_count: 9, mic_holder: null, queue: ["StudyBuddy"], chain: [{ id: 1, user: "CaffeinatedCoder", line_text: "Queued 5" }], now_playing: 5 }
];

/* Mood votes stored local */
const moodCounts = {};
["happy", "sad", "hype", "chill", "heartbreak"].forEach(m => moodCounts[m] = 0);

/* Chat messages stored local (room-independent for demo) */
const chatMessages = [
    { id: 1, user: "HostBot", message: "Welcome to VibeMic 🎉", ts: Date.now() }
];

/* Karaoke attempts history */
let attempts = [];

/* ---------------------------
   Utility / DOM helpers
   --------------------------- */
const $ = id => document.getElementById(id);

function fmtTime(s) {
    if (!s) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,"0")}`;
}

/* ---------------------------
   Render initial UI
   --------------------------- */
function initUI() {
    renderPlaylists();
    renderSongs(songs);
    renderPartyRooms();
    renderChat();
    populateKaraokeSelect();
    updateSongCount();
}

function renderPlaylists() {
    const container = $("playlistList");
    container.innerHTML = "";
    playlists.forEach(pl => {
        const li = document.createElement("li");
        li.innerHTML = `<div class="d-flex align-items-center gap-2 mb-2">
      <img src="${pl.cover}" style="width:44px;height:44px;object-fit:cover;border-radius:8px" />
      <div><div class="small text-muted">${pl.tag}</div><div>${pl.title}</div></div>
    </div>`;
        li.className = "mb-2";
        container.appendChild(li);
    });
}

function renderSongs(list) {
    const container = $("allSongs");
    container.innerHTML = "";
    list.forEach(s => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6";
        col.innerHTML = `
      <div class="song-card card p-2" onclick="playSong(${s.id})">
        <img src="${s.cover}" class="song-art">
        <div class="song-meta d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">${s.title}</div>
            <div class="small text-muted">${s.artist}</div>
          </div>
          <div class="text-muted small">${fmtTime(s.duration)}</div>
        </div>
      </div>
    `;
        container.appendChild(col);
    });
}

function updateSongCount() {
    $("songCount").innerText = `${songs.length} songs`;
}

/* ---------------------------
   Player logic
   --------------------------- */
const audio = $("audioPlayer");
let currentIndex = 0;
let isPlaying = false;

function setPlayerForSong(index) {
    const s = songs[index];
    $("playerCover").src = s.cover;
    $("playerTitle").innerText = s.title;
    $("playerArtist").innerText = s.artist;
    audio.src = s.file;
    $("seekBar").value = 0;
    $("timeTxt").innerText = `0:00 / ${fmtTime(s.duration)}`;
}

function playSong(id) {
    const idx = songs.findIndex(x => x.id === id);
    if (idx < 0) return;
    currentIndex = idx;
    setPlayerForSong(idx);
    audio.play();
    isPlaying = true;
    $("playI").className = "fa fa-pause";
}

function togglePlay() {
    if (audio.src === "") { setPlayerForSong(0); }
    if (audio.paused) { audio.play();
        isPlaying = true;
        $("playI").className = "fa fa-pause"; } else { audio.pause();
        isPlaying = false;
        $("playI").className = "fa fa-play"; }
}

function nextSong() { currentIndex = (currentIndex + 1) % songs.length;
    playSong(songs[currentIndex].id); }

function prevSong() { currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[currentIndex].id); }

audio.ontimeupdate = function() {
    const cur = audio.currentTime;
    const dur = audio.duration || songs[currentIndex].duration || 0;
    const pct = dur ? Math.floor((cur / dur) * 100) : 0;
    $("seekBar").value = Math.max(0, Math.min(100, pct));
    $("timeTxt").innerText = `${fmtTime(cur)} / ${fmtTime(dur)}`;
};
$("seekBar").oninput = function() { const dur = audio.duration || songs[currentIndex].duration || 0;
    audio.currentTime = (this.value / 100) * dur; };
$("vol").oninput = function() { audio.volume = parseFloat(this.value); };

/* Shuffle */
function shuffleAll() {
    const rand = Math.floor(Math.random() * songs.length);
    playSong(songs[rand].id);
}

/* Filter by genre */
function filterGenre(genre) {
    if (genre === "all") { renderSongs(songs);
        updateSongCount(); return; }
    const filtered = songs.filter(s => s.mood === genre);
    renderSongs(filtered);
    updateSongCount();
}

/* ---------------------------
   Karaoke: mic + scrolling + parallel transcription
   --------------------------- */
let recognition = null;
let micOn = false;
let karaokeActiveId = 0;
let karaokeScrollIndex = 0;
let karaokeInterval = null;

function populateKaraokeSelect() {
    const sel = $("karaokeSongSelect");
    sel.innerHTML = "";
    songs.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.innerText = `${s.title} — ${s.artist}`;
        sel.appendChild(opt);
    });
    karaokeActiveId = songs[0].id;
    selectKaraokeSong();
}

function selectKaraokeSong() {
    const id = parseInt($("karaokeSongSelect").value || songs[0].id);
    karaokeActiveId = id;
    const s = songs.find(x => x.id === id);
    $("karaokeCover").src = s.cover;
    $("karaokeTitle").innerText = s.title;
    $("karaokeArtist").innerText = s.artist;
    renderKaraokeLines(s.lyrics);
    resetKaraokeState();
}

function renderKaraokeLines(lines) {
    const el = $("karaokeLines");
    el.innerHTML = "";
    lines.forEach((ln, i) => {
        const p = document.createElement("p");
        p.innerText = ln;
        p.dataset.index = i;
        el.appendChild(p);
    });
}

function resetKaraokeState() {
    karaokeScrollIndex = 0;
    $("karaokeScore").innerText = "—";
    $("transcriptBox").innerHTML = "";
    $("transcriptPreview").innerText = "";
    attempts = attempts || [];
    renderAttempts();
}

/* Highlighting & auto-scrolling */
function highlightLine(i) {
    const el = $("karaokeLines");
    const ps = el.querySelectorAll("p");
    ps.forEach(p => p.classList.remove("active"));
    if (ps[i]) { ps[i].classList.add("active");
        ps[i].scrollIntoView({ behavior: "smooth", block: "center" }); }
}

/* Mic control using WebSpeech API (Chrome: webkitSpeechRecognition) */
function toggleMic() {
    if (micOn) { stopMic(true); return; }
    startMic();
}

function startMic() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        $("micStatus").innerText = "Microphone not supported on this browser.";
        return;
    }
    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new Speech();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        micOn = true;
        $("micBtn").classList.add("btn-danger");
        $("micBtn").innerText = "🎤 Live";
        $("micStatus").innerText = "Listening...";
        karaokeAutoScrollStart();
    };

    recognition.onerror = e => {
        console.warn("recognition error", e);
        $("micStatus").innerText = "Mic error";
    };

    recognition.onresult = (ev) => {
        let interim = "";
        let final = "";
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
            const res = ev.results[i];
            if (res.isFinal) final += res[0].transcript + " ";
            else interim += res[0].transcript + " ";
        }
        if (final) appendTranscript(final.trim(), true);
        if (interim) $("transcriptPreview").innerText = interim.trim();
    };

    recognition.onend = () => {
        micOn = false;
        $("micBtn").classList.remove("btn-danger");
        $("micBtn").innerText = "🎤 Start";
        $("micStatus").innerText = "Stopped";
        karaokeAutoScrollStop();
    };

    recognition.start();
}

/* Stop mic optionally finalizing */
function stopMic(finalize = false) {
    if (!recognition) return;
    recognition.stop();
    if (finalize) {
        // finalize and calc score
        setTimeout(() => calcFakeScore(true), 350);
    }
}

/* Append recognized text to transcript box */
function appendTranscript(text, isFinal = false) {
    if (!text) return;
    const box = $("transcriptBox");
    const div = document.createElement("div");
    div.className = "small text-muted mb-1";
    div.innerHTML = `<span class="text-info">${isFinal? "You:" : "…"} </span>${escapeHtml(text)}`;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    // also push to karaoke lines matching (simple)
    smartMatchLyrics(text);
}

/* Naive lyric matching to advance highlighted line */
function smartMatchLyrics(recognizedText) {
    if (!recognizedText) return;
    const s = songs.find(x => x.id === karaokeActiveId);
    if (!s) return;
    const lines = s.lyrics.map(l => l.toLowerCase().replace(/[^a-z0-9 ]+/g, "").trim());
    const rec = recognizedText.toLowerCase().replace(/[^a-z0-9 ]+/g, "").trim();
    // try find line which contains a chunk of recognized words
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] && rec.includes(lines[i].split(" ").slice(0, 4).join(" "))) {
            karaokeScrollIndex = i;
            highlightLine(i);
            return;
        }
    }
    // fallback: advance one line occasionally
    karaokeScrollIndex = Math.min(karaokeScrollIndex + 1, s.lyrics.length - 1);
    highlightLine(karaokeScrollIndex);
}

/* Auto scroll: move highlight down periodically while mic active */
function karaokeAutoScrollStart() {
    if (karaokeInterval) clearInterval(karaokeInterval);
    karaokeInterval = setInterval(() => {
        const s = songs.find(x => x.id === karaokeActiveId);
        if (!s) return;
        karaokeScrollIndex = Math.min(karaokeScrollIndex + 1, s.lyrics.length - 1);
        highlightLine(karaokeScrollIndex);
    }, 3500);
}

function karaokeAutoScrollStop() {
    if (karaokeInterval) { clearInterval(karaokeInterval);
        karaokeInterval = null; }
}

/* Fake scoring (based on number of recognized words + duration) */
function calcFakeScore(finalize = false) {
    // compute a score from transcript contents
    const texts = Array.from($("transcriptBox").querySelectorAll("div")).map(d => d.innerText || "");
    const allText = texts.join(" ").trim();
    const wordCount = allText.split(/\s+/).filter(Boolean).length;
    const base = Math.min(90, 40 + Math.floor(wordCount * 2));
    const variance = Math.floor(Math.random() * 20) - 10;
    const score = Math.max(40, Math.min(100, base + variance));
    $("karaokeScore").innerText = score;
    attempts.unshift({ ts: Date.now(), song: karaokeActiveId, score });
    renderAttempts();
    return score;
}

function renderAttempts() {
    const ul = $("attemptList");
    ul.innerHTML = "";
    attempts.slice(0, 6).forEach(a => {
        const s = songs.find(x => x.id === a.song);
        const li = document.createElement("li");
        li.innerHTML = `${s.title} — ${a.score} <small class="text-muted">(${new Date(a.ts).toLocaleTimeString()})</small>`;
        ul.appendChild(li);
    });
}

function escapeHtml(s) { return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }

/* ---------------------------
   Party rooms UI (modal + mic grab simulation)
   --------------------------- */
function renderPartyRooms() {
    const container = $("partyRoomsList");
    container.innerHTML = "";
    rooms.forEach(r => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6";
        col.innerHTML = `
      <div class="card p-3 song-card" onclick="openRoom(${r.id})">
        <div class="d-flex align-items-center">
          <div class="me-3"><i class="fa fa-door-open fa-2x text-muted"></i></div>
          <div>
            <div class="fw-bold">${r.name}</div>
            <div class="small text-muted">${r.description}</div>
          </div>
          <div class="ms-auto text-muted small">${r.listeners_count} listeners</div>
        </div>
      </div>
    `;
        container.appendChild(col);
    });
}

let currentModalRoom = null;
const roomModal = new bootstrap.Modal(document.getElementById('roomModal'), {});

function openRoom(id) {
    const r = rooms.find(x => x.id === id);
    if (!r) return;
    currentModalRoom = r;
    $("roomModalTitle").innerText = r.name;
    $("roomName").innerText = r.name;
    $("roomDesc").innerText = r.description;
    $("modalMicHolder").innerText = r.mic_holder || "None";
    renderModalQueue();
    renderChain();
    roomModal.show();
}

/* Mic grab simulation: simple local lock with UI updates */
function grabMic() {
    if (!currentModalRoom) return;
    const user = prompt("Your name to grab mic:", "You");
    if (!user) return;
    if (currentModalRoom.mic_holder) {
        alert(`Mic busy — held by ${currentModalRoom.mic_holder}`);
        return;
    }
    currentModalRoom.mic_holder = user;
    $("modalMicHolder").innerText = user;
    renderRoomsState();
    // small simulation: add the user to chain as starting
    currentModalRoom.chain.push({ id: Date.now(), user, line_text: `Grabbed mic` });
    renderChain();
}

function dropMic() {
    if (!currentModalRoom) return;
    const user = currentModalRoom.mic_holder;
    if (!user) { alert("No mic holder"); return; }
    // confirm only current holder can drop (simulated)
    const conf = confirm(`Drop mic held by ${user}?`);
    if (!conf) return;
    currentModalRoom.mic_holder = null;
    $("modalMicHolder").innerText = "None";
    renderRoomsState();
}

function renderModalQueue() {
    const el = $("modalQueue");
    el.innerHTML = "";
    currentModalRoom.queue.forEach((u, i) => {
        const li = document.createElement("li");
        li.innerText = `${i+1}. ${u}`;
        el.appendChild(li);
    });
}

function joinQueue() {
    const name = $("joinQueueName").value.trim();
    if (!name) return alert("Enter your name");
    if (currentModalRoom.queue.includes(name)) return alert("You're already in queue");
    currentModalRoom.queue.push(name);
    renderModalQueue();
    renderRoomsState();
}

function addChainLine() {
    const user = $("chainUser").value.trim() || "Anon";
    const text = $("chainText").value.trim();
    if (!text) return;
    currentModalRoom.chain.push({ id: Date.now(), user, line_text: text });
    $("chainText").value = "";
    renderChain();
    renderRoomsState();
}

function renderChain() {
    const el = $("chainList");
    el.innerHTML = "";
    currentModalRoom.chain.slice().reverse().forEach(c => {
        const div = document.createElement("div");
        div.className = "chain-item";
        div.innerHTML = `<strong>${c.user}:</strong> ${escapeHtml(c.line_text)} <div class="small text-muted">${new Date(c.id).toLocaleTimeString()}</div>`;
        el.appendChild(div);
    });
}

function renderRoomsState() {
    // refresh list and modal mic holder
    renderPartyRooms();
    if (currentModalRoom) {
        $("modalMicHolder").innerText = currentModalRoom.mic_holder || "None";
        renderModalQueue();
        renderChain();
    }
}

/* Create room prompt */
function createRoomPrompt() {
    const name = prompt("Room name:");
    if (!name) return;
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const id = Math.max(...rooms.map(r => r.id)) + 1;
    const room = { id, slug, name, description: "New room", listeners_count: 1, mic_holder: null, queue: [], chain: [], now_playing: null };
    rooms.push(room);
    renderPartyRooms();
}

/* ---------------------------
   Chat (main right sidebar)
   --------------------------- */
function renderChat() {
    const el = $("chatMessages");
    el.innerHTML = "";
    chatMessages.forEach(m => {
        const div = document.createElement("div");
        div.className = m.user === "You" ? "chat-bubble me" : "chat-bubble other";
        div.innerHTML = `<strong>${m.user}</strong><div>${escapeHtml(m.message)}</div><div class="small text-muted">${new Date(m.ts).toLocaleTimeString()}</div>`;
        el.appendChild(div);
    });
    $("chatCount").innerText = chatMessages.length;
    el.scrollTop = el.scrollHeight;
}

function sendMainChat() {
    const txt = $("chatInputMain").value.trim();
    if (!txt) return;
    chatMessages.push({ id: Date.now(), user: "You", message: txt, ts: Date.now() });
    $("chatInputMain").value = "";
    renderChat();
}

/* ---------------------------
   Mood votes
   --------------------------- */
function voteMood(type) {
    if (!moodCounts[type]) moodCounts[type] = 0;
    moodCounts[type] += 1;
    updateMoodVisual();
}

function updateMoodVisual() {
    const el = $("moodVisual");
    // choose dominant
    const dominant = Object.keys(moodCounts).reduce((a, b) => moodCounts[a] >= moodCounts[b] ? a : b, "happy");
    const map = {
        happy: "linear-gradient(135deg,#ffe57f,#ff8a65)",
        sad: "linear-gradient(135deg,#6ea8fe,#2b6cb0)",
        hype: "linear-gradient(135deg,#ff6b6b,#ffb86b)",
        chill: "linear-gradient(135deg,#7ef0c7,#3fc1c9)",
        heartbreak: "linear-gradient(135deg,#ff9aa2,#ff6b81)"
    };
    el.style.background = map[dominant] || map.happy;
    // small text
    el.innerHTML = `<div style="padding:12px"><strong>Dominant: ${dominant}</strong><div class="small text-muted mt-1">Votes: ${JSON.stringify(moodCounts)}</div></div>`;
}

/* ---------------------------
   Mode switching
   --------------------------- */
function showMode(mode) {
    ["listen", "sing", "party"].forEach(m => {
        const id = m + "View";
        if (m === mode) $(id).classList.remove("d-none");
        else $(id).classList.add("d-none");
    });
    if (mode === "sing") selectKaraokeSong();
}

/* ---------------------------
   Init
   --------------------------- */
window.addEventListener("load", () => {
    initUI();
    setPlayerForSong(0);
    updateMoodVisual();
});

/* ---------------------------
   Helper: exposes to console
   --------------------------- */
window.VibeMic = {
    songs,
    playlists,
    rooms,
    playSong,
    openRoom
};