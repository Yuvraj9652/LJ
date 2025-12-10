// script.js
document.addEventListener("DOMContentLoaded", () => {
    /* Dummy Data */

    const songs = [{
            id: 1,
            title: "Midnight Echoes",
            artist: "Neon Skyline",
            cover: "https://via.placeholder.com/300x300.png?text=Echoes",
            file: "assets/audio/midnight_echoes.mp3",
            duration: 213,
            mood: "chill"
        },
        {
            id: 2,
            title: "City Lights",
            artist: "Skyline Drive",
            cover: "https://via.placeholder.com/300x300.png?text=City",
            file: "assets/audio/city_lights.mp3",
            duration: 198,
            mood: "happy"
        },
        {
            id: 3,
            title: "Heart on Replay",
            artist: "Nova Souls",
            cover: "https://via.placeholder.com/300x300.png?text=Heart",
            file: "assets/audio/heart_on_replay.mp3",
            duration: 242,
            mood: "heartbreak"
        },
        {
            id: 4,
            title: "Rooftop Anthem",
            artist: "Golden Hour",
            cover: "https://via.placeholder.com/300x300.png?text=Anthem",
            file: "assets/audio/rooftop_anthem.mp3",
            duration: 226,
            mood: "hype"
        },
        {
            id: 5,
            title: "Cloudwalking",
            artist: "LoFi Memoirs",
            cover: "https://via.placeholder.com/300x300.png?text=Cloud",
            file: "assets/audio/cloudwalking.mp3",
            duration: 204,
            mood: "chill"
        },
        {
            id: 6,
            title: "Rainy Metro",
            artist: "Monsoon Loops",
            cover: "https://via.placeholder.com/300x300.png?text=Rain",
            file: "assets/audio/rainy_metro.mp3",
            duration: 189,
            mood: "sad"
        }
    ];

    const playlists = [{
            id: "late-night",
            title: "Late-Night Loops",
            description: "Lo-fi beats for coding and deep thoughts.",
            cover: "https://via.placeholder.com/400x220.png?text=Late+Night",
            tag: "Lo-Fi · Chill"
        },
        {
            id: "bolly-vibes",
            title: "Bollywood Vibe Check",
            description: "Hindi hits for your living-room concert.",
            cover: "https://via.placeholder.com/400x220.png?text=Bollywood",
            tag: "Bollywood · Party"
        },
        {
            id: "throwback",
            title: "90s Throwback Night",
            description: "Nostalgia-fueled bangers & sing-alongs.",
            cover: "https://via.placeholder.com/400x220.png?text=90s",
            tag: "English · Classics"
        },
        {
            id: "focus-sprints",
            title: "Focus Sprints",
            description: "Deep work tracks & ambient pulses.",
            cover: "https://via.placeholder.com/400x220.png?text=Focus",
            tag: "Instrumental · Study"
        }
    ];

    const karaokeLyrics = {
        1: [
            "Streetlights fade, the night's awake",
            "I chase the echo of mistakes",
            "Your distant voice, a neon trace",
            "We dance in static, pixelated grace",
            "",
            "Under midnight echoes, I still hear your name",
            "Every little shadow sings our old refrain",
            "If I close my eyes, I'm standing in the rain",
            "Falling for you, over again"
        ],
        2: [
            "Racing through the city, windows down low",
            "Laughing at the signs we don't quite know",
            "Our playlist stuck on summer's first hello",
            "Every red light turns to gold",
            "",
            "Under city lights, we glow like we own the night",
            "Hearts in overdrive, nothing ever felt this right",
            "If tomorrow finds us somewhere new in sight",
            "We'll still be humming this tonight"
        ],
        3: [
            "I left your sweater on the chair",
            "The one you said you'd come to share",
            "The coffee's cold, the room's too bare",
            "Your ghost still sits across me there",
            "",
            "My heart on replay, every word that you said",
            "Spinning like a record that will never end",
            "I press fast-forward but I'm stuck instead",
            "In every almost that we left unsaid"
        ],
        4: [
            "Feet on the rooftop, city in our hands",
            "We turn up the speaker, we’re our own band",
            "Stars for a ceiling, friends for a crowd",
            "We sing off-key but we sing out loud",
            "",
            "It's our rooftop anthem, echo through the sky",
            "Hands up, hearts up, never asking why",
            "If tomorrow changes who we are tonight",
            "We'll still remember when we touched the sky"
        ],
        5: [
            "Floating over sidewalks, thoughts in slow-motion",
            "Turning little heartaches into devotion",
            "Clouds beneath my sneakers, peace in the commotion",
            "Every gentle rhythm feels like an ocean",
            "",
            "I'm cloudwalking, far from the noise",
            "Drifting softly with borrowed joys",
            "If I fall down, I'll rise again",
            "To float once more past where I've been"
        ],
        6: [
            "Umbrellas bloom along the line",
            "Your station's now two stops from mine",
            "The glass is fogged with what-ifs drawn",
            "By fingertips that moved on",
            "",
            "This rainy metro, holds our ghosted plans",
            "Two parallel tracks, two separate lands",
            "If I meet your eyes in passing glance",
            "We'll be strangers that once had a chance"
        ]
    };

    const partyRooms = [{
            id: "mood-ring",
            name: "Mood Ring Room",
            description: "The room that changes with everyone's vibe.",
            listeners: 18,
            nowPlaying: songs[1],
            chain: [
                { user: "SparkleFox", song: songs[1] },
                { user: "LowKeyLofi", song: songs[5] },
                { user: "RetroKid", song: songs[3] }
            ],
            queue: [
                "PartyPanda",
                "KaraKing",
                "BasslineBee"
            ]
        },
        {
            id: "bolly-bash",
            name: "Bollywood Bash",
            description: "Desi bangers and high-energy hooks.",
            listeners: 32,
            nowPlaying: songs[2],
            chain: [
                { user: "DesiDrop", song: songs[2] },
                { user: "BeatRider", song: songs[4] }
            ],
            queue: [
                "MicrophoneMitra"
            ]
        },
        {
            id: "lofi-lounge",
            name: "Lo-Fi Lounge",
            description: "Soft beats, kind words, comfy chaos.",
            listeners: 9,
            nowPlaying: songs[5],
            chain: [
                { user: "CaffeinatedCoder", song: songs[5] }
            ],
            queue: [
                "StudyBuddy",
                "NightOwl"
            ]
        }
    ];

    const initialChatMessages = [
        { author: "HostBot", me: false, text: "Welcome to VibeMic Mood Ring Room 🎉" },
        { author: "LoFiLlama", me: false, text: "Anyone up for a chill track next?" },
        { author: "You", me: true, text: "Queue me for a happy hype song 😄" }
    ];

    /* DOM References */

    const navModeLinks = document.querySelectorAll(".nav-mode-link");
    const views = {
        listen: document.getElementById("view-listen"),
        sing: document.getElementById("view-sing"),
        party: document.getElementById("view-party")
    };
    const sidebarLinks = document.querySelectorAll(".sidebar-link");

    // Listen view
    const featuredPlaylistsContainer = document.getElementById("featuredPlaylists");
    const allSongsContainer = document.getElementById("allSongs");
    const songSearchInput = document.getElementById("songSearch");

    // Player
    const audioPlayer = document.getElementById("audioPlayer");
    const playerCover = document.getElementById("playerCover");
    const playerTitle = document.getElementById("playerTitle");
    const playerArtist = document.getElementById("playerArtist");
    const btnPlayPause = document.getElementById("btnPlayPause");
    const playPauseIcon = document.getElementById("playPauseIcon");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const playerSeek = document.getElementById("playerSeek");
    const playerVolume = document.getElementById("playerVolume");
    const currentTimeLabel = document.getElementById("currentTimeLabel");
    const durationLabel = document.getElementById("durationLabel");
    const btnKaraokeToggle = document.getElementById("btnKaraokeToggle");
    const karaokeToggleIcon = document.getElementById("karaokeToggleIcon");
    const karaokeToggleLabel = document.getElementById("karaokeToggleLabel");

    // Mood
    const moodButtons = document.querySelectorAll(".mood-btn");
    const moodVisual = document.getElementById("moodVisual");
    const moodDominant = document.getElementById("moodDominant");
    const moodVotesInfo = document.getElementById("moodVotesInfo");

    // Chat
    const chatMessages = document.getElementById("chatMessages");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");

    // Karaoke (Sing view)
    const karaokeSongSelect = document.getElementById("karaokeSongSelect");
    const karaokeSongMeta = document.getElementById("karaokeSongMeta");
    const karaokeLyricsContainer = document.getElementById("karaokeLyrics");
    const karaokeProgress = document.getElementById("karaokeProgress");
    const karaokePitch = document.getElementById("karaokePitch");
    const karaokeScore = document.getElementById("karaokeScore");
    const karaokeScoreBar = document.getElementById("karaokeScoreBar");
    const karaokeScoreLabel = document.getElementById("karaokeScoreLabel");
    const karaokeStatusBadge = document.getElementById("karaokeStatusBadge");
    const btnKaraokeStart = document.getElementById("btnKaraokeStart");
    const btnKaraokeReset = document.getElementById("btnKaraokeReset");
    const btnRandomSong = document.getElementById("btnRandomSong");

    // Party
    const partyRoomsList = document.getElementById("partyRoomsList");
    const partyRoomTitle = document.getElementById("partyRoomTitle");
    const partyRoomSubtitle = document.getElementById("partyRoomSubtitle");
    const partyChainList = document.getElementById("partyChainList");
    const partyQueueList = document.getElementById("partyQueueList");
    const partyNowPlaying = document.getElementById("partyNowPlaying");
    const partyListeners = document.getElementById("partyListeners");
    const btnGrabMic = document.getElementById("btnGrabMic");
    const btnCreateRoom = document.getElementById("btnCreateRoom");

    /* State */

    let currentView = "listen";
    let currentSongIndex = -1;
    let isKaraokeActive = false;
    let moodVotes = {
        happy: 0,
        sad: 0,
        hype: 0,
        chill: 0,
        heartbreak: 0
    };

    let karaokeTimer = null;
    let karaokeProgressValue = 0;
    let karaokeSelectedSongId = songs[0].id;

    let activePartyRoomId = null;

    /* Utility Functions */

    function formatTime(seconds) {
        const sec = Math.floor(seconds || 0);
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    }

    function clearChildren(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /* View Switching */

    function setActiveView(mode) {
        currentView = mode;

        Object.entries(views).forEach(([key, section]) => {
            if (key === mode) {
                section.classList.remove("d-none");
            } else {
                section.classList.add("d-none");
            }
        });

        navModeLinks.forEach(link => {
            const linkMode = link.dataset.mode;
            if (linkMode === mode || (linkMode === "listen" && mode === "listen")) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        sidebarLinks.forEach(link => {
            const linkMode = link.dataset.mode;
            if (linkMode === mode) {
                link.classList.add("active");
            } else if (!linkMode && mode === "listen" && link.textContent.trim().startsWith("Listen")) {
                link.classList.add("active");
            } else if (linkMode !== mode) {
                link.classList.remove("active");
            }
        });
    }

    navModeLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const mode = link.dataset.mode || "listen";
            setActiveView(mode);
        });
    });

    /* Listen View Rendering */

    function renderFeaturedPlaylists() {
        clearChildren(featuredPlaylistsContainer);

        playlists.forEach(pl => {
            const col = document.createElement("div");
            col.className = "col-6 col-lg-3";

            col.innerHTML = `
                <div class="card playlist-card bg-dark-soft border-0 h-100">
                    <img src="${pl.cover}" class="card-img-top rounded-4 p-2 pb-0" alt="${pl.title}">
                    <div class="card-body">
                        <h6 class="card-title mb-1">${pl.title}</h6>
                        <p class="card-text small text-muted mb-2">${pl.description}</p>
                        <span class="badge bg-light bg-opacity-10 text-muted small">
                            <i class="fa-solid fa-list-ul me-1"></i>${pl.tag}
                        </span>
                    </div>
                </div>
            `;
            featuredPlaylistsContainer.appendChild(col);
        });
    }

    function createSongCard(song) {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6";

        col.innerHTML = `
            <div class="song-card" data-song-id="${song.id}">
                <img src="${song.cover}" alt="${song.title}" class="song-cover">
                <div class="flex-grow-1">
                    <div class="song-meta-title">${song.title}</div>
                    <div class="song-meta-artist">${song.artist}</div>
                    <div class="song-meta-extra">
                        <i class="fa-solid fa-clock me-1"></i>${formatTime(song.duration)} ·
                        <i class="fa-solid fa-bolt me-1 ms-2"></i>${song.mood}
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-light ms-2">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        `;
        return col;
    }

    function renderSongList(filterText = "") {
        clearChildren(allSongsContainer);

        const query = filterText.trim().toLowerCase();
        const filtered = songs.filter(song => {
            if (!query) return true;
            return (
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query)
            );
        });

        filtered.forEach(song => {
            const card = createSongCard(song);
            allSongsContainer.appendChild(card);
        });

        // Attach click handlers
        allSongsContainer.querySelectorAll(".song-card").forEach(card => {
            card.addEventListener("click", () => {
                const id = parseInt(card.dataset.songId, 10);
                const index = songs.findIndex(s => s.id === id);
                if (index !== -1) {
                    setCurrentSong(index, true);
                }
            });
        });

        highlightActiveSongCard();
    }

    songSearchInput.addEventListener("input", (e) => {
        renderSongList(e.target.value);
    });

    /* Player Logic */

    function highlightActiveSongCard() {
        document.querySelectorAll(".song-card").forEach(card => {
            const id = parseInt(card.dataset.songId, 10);
            if (songs[currentSongIndex] && songs[currentSongIndex].id === id) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    function setCurrentSong(index, autoplay = false) {
        if (index < 0 || index >= songs.length) return;

        currentSongIndex = index;
        const song = songs[index];

        playerCover.src = song.cover;
        playerTitle.textContent = song.title;
        playerArtist.textContent = song.artist;

        audioPlayer.src = song.file || "";
        audioPlayer.currentTime = 0;

        if (autoplay) {
            audioPlayer.play().catch(() => {
                // Autoplay might be blocked; ignore
            });
        }

        updatePlayPauseIcon();
        highlightActiveSongCard();
    }

    function updatePlayPauseIcon() {
        if (audioPlayer.paused || audioPlayer.src === "") {
            playPauseIcon.classList.remove("fa-pause");
            playPauseIcon.classList.add("fa-play");
        } else {
            playPauseIcon.classList.remove("fa-play");
            playPauseIcon.classList.add("fa-pause");
        }
    }

    btnPlayPause.addEventListener("click", () => {
        if (!audioPlayer.src) {
            // No song selected; pick first
            setCurrentSong(0, true);
            return;
        }

        if (audioPlayer.paused) {
            audioPlayer.play().catch(() => {});
        } else {
            audioPlayer.pause();
        }
        updatePlayPauseIcon();
    });

    btnPrev.addEventListener("click", () => {
        if (songs.length === 0) return;
        const nextIndex =
            currentSongIndex <= 0 ? songs.length - 1 : currentSongIndex - 1;
        setCurrentSong(nextIndex, true);
    });

    btnNext.addEventListener("click", () => {
        if (songs.length === 0) return;
        const nextIndex =
            currentSongIndex >= songs.length - 1 ? 0 : currentSongIndex + 1;
        setCurrentSong(nextIndex, true);
    });

    playerSeek.addEventListener("input", () => {
        if (audioPlayer.duration) {
            const pct = parseFloat(playerSeek.value) / 100;
            audioPlayer.currentTime = pct * audioPlayer.duration;
        }
    });

    playerVolume.addEventListener("input", () => {
        audioPlayer.volume = parseFloat(playerVolume.value);
    });

    audioPlayer.addEventListener("timeupdate", () => {
        if (!audioPlayer.duration) return;
        const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerSeek.value = pct;
        currentTimeLabel.textContent = formatTime(audioPlayer.currentTime);
        durationLabel.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener("play", updatePlayPauseIcon);
    audioPlayer.addEventListener("pause", updatePlayPauseIcon);
    audioPlayer.addEventListener("ended", () => {
        btnNext.click();
    });

    // Initial volume
    audioPlayer.volume = parseFloat(playerVolume.value);

    /* Karaoke Toggle (Player Right) */

    btnKaraokeToggle.addEventListener("click", () => {
        isKaraokeActive = !isKaraokeActive;
        if (isKaraokeActive) {
            karaokeToggleIcon.classList.remove("fa-microphone-slash");
            karaokeToggleIcon.classList.add("fa-microphone");
            karaokeToggleLabel.textContent = "Karaoke On";
            btnKaraokeToggle.classList.remove("btn-outline-light");
            btnKaraokeToggle.classList.add("btn-warning", "text-dark");
        } else {
            karaokeToggleIcon.classList.add("fa-microphone-slash");
            karaokeToggleIcon.classList.remove("fa-microphone");
            karaokeToggleLabel.textContent = "Karaoke Off";
            btnKaraokeToggle.classList.add("btn-outline-light");
            btnKaraokeToggle.classList.remove("btn-warning", "text-dark");
        }
    });

    /* Mood Logic */

    const moodStyles = {
        happy: {
            gradient: "radial-gradient(circle at 20% 0%, rgba(250, 204, 21, 0.35), transparent 55%), radial-gradient(circle at 80% 100%, rgba(52, 211, 153, 0.32), transparent 55%)"
        },
        sad: {
            gradient: "radial-gradient(circle at 20% 0%, rgba(59, 130, 246, 0.4), transparent 55%), radial-gradient(circle at 80% 100%, rgba(37, 99, 235, 0.35), transparent 55%)"
        },
        hype: {
            gradient: "radial-gradient(circle at 20% 0%, rgba(239, 68, 68, 0.5), transparent 55%), radial-gradient(circle at 80% 100%, rgba(251, 191, 36, 0.4), transparent 55%)"
        },
        chill: {
            gradient: "radial-gradient(circle at 20% 0%, rgba(45, 212, 191, 0.4), transparent 55%), radial-gradient(circle at 80% 100%, rgba(56, 189, 248, 0.4), transparent 55%)"
        },
        heartbreak: {
            gradient: "radial-gradient(circle at 20% 0%, rgba(190, 24, 93, 0.58), transparent 55%), radial-gradient(circle at 80% 100%, rgba(248, 113, 113, 0.55), transparent 55%)"
        }
    };

    function updateMoodDominant() {
        const total = Object.values(moodVotes).reduce((a, b) => a + b, 0);
        if (total === 0) {
            moodDominant.textContent = "None";
            moodVotesInfo.textContent = "(0 votes)";
            return;
        }

        let dominantKey = null;
        let maxVotes = -1;
        for (const [key, value] of Object.entries(moodVotes)) {
            if (value > maxVotes) {
                maxVotes = value;
                dominantKey = key;
            }
        }

        const labelMap = {
            happy: "Happy",
            sad: "Sad",
            hype: "Hype",
            chill: "Chill",
            heartbreak: "Heartbreak"
        };

        moodDominant.textContent = labelMap[dominantKey] || dominantKey;
        moodVotesInfo.textContent = `(${maxVotes} vote${maxVotes !== 1 ? "s" : ""})`;
    }

    function setBodyMoodClass(moodKey) {
        document.body.classList.remove(
            "mood-happy",
            "mood-sad",
            "mood-hype",
            "mood-chill",
            "mood-heartbreak"
        );
        if (moodKey) {
            document.body.classList.add(`mood-${moodKey}`);
        }
    }

    moodButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const mood = btn.dataset.mood;
            if (!mood) return;
            moodVotes[mood] = (moodVotes[mood] || 0) + 1;

            // Visual background update
            const style = moodStyles[mood];
            if (style) {
                moodVisual.style.backgroundImage = style.gradient;
            }

            setBodyMoodClass(mood);
            updateMoodDominant();

            // Tiny ripple animation feedback
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 150);
        });
    });

    /* Chat Logic */

    function appendChatMessage({ author, me, text }) {
        const wrapper = document.createElement("div");
        wrapper.className = `chat-message ${me ? "me" : "other"}`;

        wrapper.innerHTML = `
            <div class="author">${author}</div>
            <div class="bubble">${text}</div>
        `;
        chatMessages.appendChild(wrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    initialChatMessages.forEach(msg => appendChatMessage(msg));

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        appendChatMessage({ author: "You", me: true, text });

        // Fun fake response
        setTimeout(() => {
            const responses = [
                "Love that energy! 🔥",
                "Adding that vibe to the queue 🎶",
                "Same, that's my jam too!",
                "Mood. Absolutely mood."
            ];
            appendChatMessage({
                author: "HostBot",
                me: false,
                text: responses[randomInt(0, responses.length - 1)]
            });
        }, randomInt(800, 2000));

        chatInput.value = "";
    });

    /* Karaoke (Sing View) */

    function populateKaraokeSongSelect() {
        clearChildren(karaokeSongSelect);
        songs.forEach(song => {
            const option = document.createElement("option");
            option.value = song.id;
            option.textContent = `${song.title} – ${song.artist}`;
            karaokeSongSelect.appendChild(option);
        });
        karaokeSongSelect.value = karaokeSelectedSongId;
        updateKaraokeSongMeta();
        renderKaraokeLyrics();
    }

    function updateKaraokeSongMeta() {
        const song = songs.find(s => s.id === parseInt(karaokeSongSelect.value, 10));
        if (!song) {
            karaokeSongMeta.textContent = "Select a song to begin";
            return;
        }
        karaokeSongMeta.textContent = `${song.title} • ${song.artist}`;
    }

    function renderKaraokeLyrics() {
        clearChildren(karaokeLyricsContainer);

        const songId = parseInt(karaokeSongSelect.value, 10);
        const lines = karaokeLyrics[songId] || ["No lyrics available for this track yet."];

        lines.forEach((line, index) => {
            const p = document.createElement("p");
            p.className = "lyrics-line";
            p.dataset.index = index.toString();
            p.textContent = line || " ";
            karaokeLyricsContainer.appendChild(p);
        });
    }

    karaokeSongSelect.addEventListener("change", () => {
        karaokeSelectedSongId = parseInt(karaokeSongSelect.value, 10);
        updateKaraokeSongMeta();
        resetKaraokeState();
        renderKaraokeLyrics();
    });

    btnRandomSong.addEventListener("click", () => {
        const randomSong = songs[randomInt(0, songs.length - 1)];
        karaokeSelectedSongId = randomSong.id;
        karaokeSongSelect.value = randomSong.id;
        updateKaraokeSongMeta();
        resetKaraokeState();
        renderKaraokeLyrics();
    });

    function resetKaraokeState() {
        if (karaokeTimer) {
            clearInterval(karaokeTimer);
            karaokeTimer = null;
        }
        karaokeProgressValue = 0;
        karaokeProgress.style.width = "0%";
        karaokePitch.textContent = "--%";
        karaokeScore.textContent = "--";
        karaokeScoreBar.style.width = "0%";
        karaokeScoreLabel.textContent = "Hit Start to get scored.";
        karaokeStatusBadge.textContent = "Ready";
        karaokeStatusBadge.classList.remove("bg-danger", "bg-success");
        karaokeStatusBadge.classList.add("bg-success", "bg-opacity-25", "text-success");

        karaokeLyricsContainer.querySelectorAll(".lyrics-line").forEach(line => {
            line.classList.remove("active", "past");
        });
    }

    function startKaraokeRun() {
        resetKaraokeState();

        const songId = parseInt(karaokeSongSelect.value, 10);
        const lines = karaokeLyrics[songId] || [];
        if (lines.length === 0) return;

        karaokeStatusBadge.textContent = "Singing...";
        karaokeStatusBadge.classList.remove("bg-success", "bg-opacity-25", "text-success");
        karaokeStatusBadge.classList.add("bg-warning", "text-dark");

        const totalSteps = Math.max(10, lines.length * 2);
        let step = 0;

        karaokeTimer = setInterval(() => {
            step++;
            karaokeProgressValue = Math.min(100, Math.floor((step / totalSteps) * 100));
            karaokeProgress.style.width = karaokeProgressValue + "%";

            // Fake pitch between 60 and 100
            const pitchValue = randomInt(60, 100);
            karaokePitch.textContent = `${pitchValue}%`;

            // Highlight lyrics lines gradually
            const activeLineIndex = Math.floor(
                (step / totalSteps) * Math.max(lines.length - 1, 1)
            );
            karaokeLyricsContainer.querySelectorAll(".lyrics-line").forEach(line => {
                const index = parseInt(line.dataset.index, 10);
                line.classList.toggle("active", index === activeLineIndex);
                line.classList.toggle("past", index < activeLineIndex);
            });

            if (step >= totalSteps) {
                clearInterval(karaokeTimer);
                karaokeTimer = null;
                finalizeKaraokeScore();
            }
        }, 400);
    }

    function finalizeKaraokeScore() {
        const score = randomInt(65, 100);
        karaokeScore.textContent = score;
        karaokeScoreBar.style.width = `${score}%`;

        let label;
        if (score >= 95) {
            label = "Legendary! The neighbors are now fans. 🤩";
        } else if (score >= 85) {
            label = "Superstar vibes! Keep the mic. ⭐";
        } else if (score >= 75) {
            label = "Solid performance, you’re warming up nicely. 🎤";
        } else {
            label = "The effort counts! Queue another track and go again. 💪";
        }
        karaokeScoreLabel.textContent = label;

        karaokeStatusBadge.textContent = "Round Complete";
        karaokeStatusBadge.classList.remove("bg-warning", "text-dark");
        karaokeStatusBadge.classList.add("bg-success", "bg-opacity-25", "text-success");
    }

    btnKaraokeStart.addEventListener("click", () => {
        if (karaokeTimer) return; // already running
        startKaraokeRun();
    });

    btnKaraokeReset.addEventListener("click", () => {
        resetKaraokeState();
    });

    /* Party Rooms */

    function renderPartyRooms() {
        clearChildren(partyRoomsList);

        partyRooms.forEach(room => {
            const item = document.createElement("button");
            item.type = "button";
            item.className =
                "list-group-item list-group-item-action bg-transparent text-start border-0 party-room-item";
            item.dataset.roomId = room.id;

            item.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <div class="fw-semibold small">${room.name}</div>
                        <div class="small text-muted">${room.description}</div>
                    </div>
                    <div class="text-end small text-muted">
                        <div>
                            <i class="fa-solid fa-user-group me-1"></i>${room.listeners}
                        </div>
                        <div class="text-warning">
                            <i class="fa-solid fa-music me-1"></i>${room.nowPlaying.title}
                        </div>
                    </div>
                </div>
            `;

            item.addEventListener("click", () => {
                setActivePartyRoom(room.id);
            });

            partyRoomsList.appendChild(item);
        });
    }

    function setActivePartyRoom(roomId) {
        const room = partyRooms.find(r => r.id === roomId);
        if (!room) return;
        activePartyRoomId = roomId;

        partyRoomsList.querySelectorAll(".party-room-item").forEach(item => {
            item.classList.toggle("active", item.dataset.roomId === roomId);
        });

        partyRoomTitle.textContent = room.name;
        partyRoomSubtitle.textContent = room.description;
        partyNowPlaying.textContent = `Now playing: ${room.nowPlaying.title} – ${room.nowPlaying.artist}`;
        partyListeners.innerHTML = `<i class="fa-solid fa-user-group me-1"></i> ${room.listeners} listeners`;

        clearChildren(partyChainList);
        room.chain.forEach(entry => {
            const li = document.createElement("li");
            li.className = "list-group-item bg-transparent border-0 px-0 py-1";
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span><strong>${entry.user}</strong> → ${entry.song.title}</span>
                    <span class="badge bg-light bg-opacity-10 text-muted small">
                        ${entry.song.mood}
                    </span>
                </div>
            `;
            partyChainList.appendChild(li);
        });

        clearChildren(partyQueueList);
        room.queue.forEach(user => {
            const li = document.createElement("li");
            li.className = "list-group-item bg-transparent border-0 px-0 py-1";
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span>${user}</span>
                    <i class="fa-solid fa-microphone-lines text-muted"></i>
                </div>
            `;
            partyQueueList.appendChild(li);
        });

        btnGrabMic.disabled = false;
    }

    btnGrabMic.addEventListener("click", () => {
        if (!activePartyRoomId) return;
        const room = partyRooms.find(r => r.id === activePartyRoomId);
        if (!room) return;

        if (!room.queue.includes("You")) {
            room.queue.push("You");
            const li = document.createElement("li");
            li.className = "list-group-item bg-transparent border-0 px-0 py-1";
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span>You</span>
                    <i class="fa-solid fa-microphone-lines text-warning"></i>
                </div>
            `;
            partyQueueList.appendChild(li);

            appendChatMessage({
                author: "HostBot",
                me: false,
                text: "You grabbed the mic! We'll call you up soon 🎤"
            });
        }
    });

    btnCreateRoom.addEventListener("click", () => {
        appendChatMessage({
            author: "HostBot",
            me: false,
            text: "Custom party rooms are coming soon. For now, pick one and vibe along ✨"
        });
    });

    /* Initial Render */

    renderFeaturedPlaylists();
    renderSongList();
    populateKaraokeSongSelect();
    renderPartyRooms();
    // Default party room: Mood Ring Room if present
    const defaultPartyRoom = partyRooms.find(r => r.id === "mood-ring") || partyRooms[0];
    if (defaultPartyRoom) {
        setActivePartyRoom(defaultPartyRoom.id);
    }

    // Initialize mood text
    updateMoodDominant();

    // Default view
    setActiveView("listen");
});