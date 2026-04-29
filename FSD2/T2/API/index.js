const express = require("express");

module.exports = function movieAPI(options = {}) {
    const router = express.Router();
    router.use(express.json());

    const config = {
        //defaultLimit: 5,
        ...options
    };

    // 🎬 Data
let movies = [
    // 🟥 MARVEL (MCU Phase 1–3)
    { id: 1, universe: "Marvel", title: "Iron Man", year: 2008, phase: 1 },
    { id: 2, universe: "Marvel", title: "The Incredible Hulk", year: 2008, phase: 1 },
    { id: 3, universe: "Marvel", title: "Iron Man 2", year: 2010, phase: 1 },
    { id: 4, universe: "Marvel", title: "Thor", year: 2011, phase: 1 },
    { id: 5, universe: "Marvel", title: "Captain America: The First Avenger", year: 2011, phase: 1 },
    { id: 6, universe: "Marvel", title: "The Avengers", year: 2012, phase: 1 },

    { id: 7, universe: "Marvel", title: "Iron Man 3", year: 2013, phase: 2 },
    { id: 8, universe: "Marvel", title: "Thor: The Dark World", year: 2013, phase: 2 },
    { id: 9, universe: "Marvel", title: "Captain America: The Winter Soldier", year: 2014, phase: 2 },
    { id: 10, universe: "Marvel", title: "Guardians of the Galaxy", year: 2014, phase: 2 },
    { id: 11, universe: "Marvel", title: "Avengers: Age of Ultron", year: 2015, phase: 2 },
    { id: 12, universe: "Marvel", title: "Ant-Man", year: 2015, phase: 2 },

    { id: 13, universe: "Marvel", title: "Captain America: Civil War", year: 2016, phase: 3 },
    { id: 14, universe: "Marvel", title: "Doctor Strange", year: 2016, phase: 3 },
    { id: 15, universe: "Marvel", title: "Guardians of the Galaxy Vol. 2", year: 2017, phase: 3 },
    { id: 16, universe: "Marvel", title: "Spider-Man: Homecoming", year: 2017, phase: 3 },
    { id: 17, universe: "Marvel", title: "Thor: Ragnarok", year: 2017, phase: 3 },
    { id: 18, universe: "Marvel", title: "Black Panther", year: 2018, phase: 3 },
    { id: 19, universe: "Marvel", title: "Avengers: Infinity War", year: 2018, phase: 3 },
    { id: 20, universe: "Marvel", title: "Ant-Man and the Wasp", year: 2018, phase: 3 },
    { id: 21, universe: "Marvel", title: "Captain Marvel", year: 2019, phase: 3 },
    { id: 22, universe: "Marvel", title: "Avengers: Endgame", year: 2019, phase: 3 },
    { id: 23, universe: "Marvel", title: "Spider-Man: Far From Home", year: 2019, phase: 3 },

    // 🟥 MARVEL (Phase 4+)
    { id: 24, universe: "Marvel", title: "Black Widow", year: 2021, phase: 4 },
    { id: 25, universe: "Marvel", title: "Shang-Chi", year: 2021, phase: 4 },
    { id: 26, universe: "Marvel", title: "Eternals", year: 2021, phase: 4 },
    { id: 27, universe: "Marvel", title: "Spider-Man: No Way Home", year: 2021, phase: 4 },
    { id: 28, universe: "Marvel", title: "Doctor Strange in the Multiverse of Madness", year: 2022, phase: 4 },
    { id: 29, universe: "Marvel", title: "Thor: Love and Thunder", year: 2022, phase: 4 },
    { id: 30, universe: "Marvel", title: "Black Panther: Wakanda Forever", year: 2022, phase: 4 },

    // 🟦 DC MOVIES
    { id: 101, universe: "DC", title: "Man of Steel", year: 2013 },
    { id: 102, universe: "DC", title: "Batman v Superman: Dawn of Justice", year: 2016 },
    { id: 103, universe: "DC", title: "Suicide Squad", year: 2016 },
    { id: 104, universe: "DC", title: "Wonder Woman", year: 2017 },
    { id: 105, universe: "DC", title: "Justice League", year: 2017 },
    { id: 106, universe: "DC", title: "Aquaman", year: 2018 },
    { id: 107, universe: "DC", title: "Shazam!", year: 2019 },
    { id: 108, universe: "DC", title: "Birds of Prey", year: 2020 },
    { id: 109, universe: "DC", title: "Wonder Woman 1984", year: 2020 },
    { id: 110, universe: "DC", title: "The Suicide Squad", year: 2021 },
    { id: 111, universe: "DC", title: "The Batman", year: 2022 },
    { id: 112, universe: "DC", title: "Black Adam", year: 2022 },
    { id: 113, universe: "DC", title: "Shazam! Fury of the Gods", year: 2023 },
    { id: 114, universe: "DC", title: "The Flash", year: 2023 },
    { id: 115, universe: "DC", title: "Blue Beetle", year: 2023 },
    { id: 116, universe: "DC", title: "Aquaman and the Lost Kingdom", year: 2023 }
];
    // 🧠 Pagination
    const paginate = (data, page, limit) => {
        const start = (page - 1) * limit;
        return data.slice(start, start + limit);
    };

    // ✅ GET all
    router.get("/", (req, res) => {
        try {
            let result = [...movies];

            const {
                universe,
                phase,
                year,
                search,
                sort,
                page = 1,
                limit 
            } = req.query;

            // 🔵 Universe filter
            if (universe) {
                result = result.filter(m =>
                    m.universe.toLowerCase() === universe.toLowerCase()
                );
            }

            // 🟡 Phase filter
            if (phase) result = result.filter(m => m.phase == phase);

            // 🟢 Year filter
            if (year) result = result.filter(m => m.year == year);

            // 🔍 Search
            if (search) {
                result = result.filter(m =>
                    m.title.toLowerCase().includes(search.toLowerCase())
                );
            }

            // 🔃 Safe sort
            if (sort) {
                result.sort((a, b) => {
                    if (typeof a[sort] === "string") {
                        return a[sort].localeCompare(b[sort]);
                    }
                    return a[sort] - b[sort];
                });
            }

           if (limit) {
    const paginated = paginate(result, Number(page), Number(limit));

    return res.json({
        total: result.length,
        page: Number(page),
        limit: Number(limit),
        data: paginated
    });
}

// 👉 If no limit → return all data
res.json({
    total: result.length,
    data: result
});

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // ✅ GET by ID (safe numeric route)
    router.get("/:id(\\d+)", (req, res) => {
        const movie = movies.find(m => m.id == req.params.id);
        movie ? res.json(movie) : res.status(404).json({ error: "Not Found" });
    });

    // ✅ POST
    router.post("/", (req, res) => {
        const { title, universe, year } = req.body;

        if (!title || !universe || !year) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newMovie = { id: Date.now(), ...req.body };
        movies.push(newMovie);

        res.status(201).json(newMovie);
    });

    // ✅ PUT
    router.put("/:id(\\d+)", (req, res) => {
        const index = movies.findIndex(m => m.id == req.params.id);

        if (index !== -1) {
            movies[index] = { ...movies[index], ...req.body };
            res.json(movies[index]);
        } else {
            res.status(404).json({ error: "Not Found" });
        }
    });

    // ✅ DELETE
    router.delete("/:id(\\d+)", (req, res) => {
        const exists = movies.some(m => m.id == req.params.id);

        if (exists) {
            movies = movies.filter(m => m.id != req.params.id);
            res.json({ message: "Deleted successfully" });
        } else {
            res.status(404).json({ error: "Not Found" });
        }
    });

    return router;
};