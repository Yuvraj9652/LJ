-- database/schema.sql
CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password_hash TEXT
);

CREATE TABLE Skills (
    skill_id INTEGER PRIMARY KEY AUTOINCREMENT,
    skill_name TEXT,
    category TEXT
);

CREATE TABLE UserSkills (
    user_skill_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    skill_id INTEGER,
    type TEXT, -- 'Teach' or 'Learn'
    FOREIGN KEY(user_id) REFERENCES Users(user_id),
    FOREIGN KEY(skill_id) REFERENCES Skills(skill_id)
);

CREATE TABLE Credits (
    credit_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    balance INTEGER DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE Sessions (
    session_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    skill_id INTEGER,
    scheduled_time TEXT,
    status TEXT,
    FOREIGN KEY(user_id) REFERENCES Users(user_id),
    FOREIGN KEY(skill_id) REFERENCES Skills(skill_id)
);

CREATE TABLE Feedback (
    feedback_id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id INTEGER,
    given_by INTEGER,
    rating INTEGER,
    comments TEXT,
    FOREIGN KEY(session_id) REFERENCES Sessions(session_id),
    FOREIGN KEY(given_by) REFERENCES Users(user_id)
);
