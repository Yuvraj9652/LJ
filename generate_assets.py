# import base64
# import os

# covers = {
#     "cover1.png": "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlH05YAAAAA1BMVEWZmZm9tliDAAAAKUlEQVR42u3BgQAAAADDoPlTH+AKAAAAAAAAAAAAAAAAAAAAAAAAAADwGxQAAAGlSURBVO3BQREAAAgDIN8/9K3hBBgAAAAAAAAAAAAAAAAAAAAAAAAD8C6fAAQABtmukkAAAAABJRU5ErkJggg==",
#     "cover2.png": "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlH05YAAAAA1BMVEUAAADNZW3PAAAAKUlEQVR42u3BgQAAAADDoPlTH+AKAAAAAAAAAAAAAAAAAAAAAAAAAADwGxQAAAGlSURBVO3BQREAAAgDIN8/9K3hBBgAAAAAAAAAAAAAAAAAAAAAAAAD8C6fAAQABtmukkAAAAABJRU5ErkJggg==",
#     "cover3.png": "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlH05YAAAAA1BMVEUAAAD///9fZz/UAAAAKUlEQVR42u3BgQAAAADDoPlTH+AKAAAAAAAAAAAAAAAAAAAAAAAAAADwGxQAAAGlSURBVO3BQREAAAgDIN8/9K3hBBgAAAAAAAAAAAAAAAAAAAAAAAAD8C6fAAQABtmukkAAAAABJRU5ErkJggg==",
#     "cover4.png": "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlH05YAAAAA1BMVEWqqqrAAABYAAAAKUlEQVR42u3BgQAAAADDoPlTH+AKAAAAAAAAAAAAAAAAAAAAAAAAAADwGxQAAAGlSURBVO3BQREAAAgDIN8/9K3hBBgAAAAAAAAAAAAAAAAAAAAAAAAD8C6fAAQABtmukkAAAAABJRU5ErkJggg==",
#     "cover5.png": "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlH05YAAAAA1BMVEXMzMyrrr4SAAAAKUlEQVR42u3BgQAAAADDoPlTH+AKAAAAAAAAAAAAAAAAAAAAAAAAAADwGxQAAAGlSURBVO3BQREAAAgDIN8/9K3hBBgAAAAAAAAAAAAAAAAAAAAAAAAD8C6fAAQABtmukkAAAAABJRU5ErkJggg==",
#     "cover6.png": "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlH05YAAAAA1BMVEVjY2OPOn3aAAAAKUlEQVR42u3BgQAAAADDoPlTH+AKAAAAAAAAAAAAAAAAAAAAAAAAAADwGxQAAAGlSURBVO3BQREAAAgDIN8/9K3hBBgAAAAAAAAAAAAAAAAAAAAAAAAD8C6fAAQABtmukkAAAAABJRU5ErkJggg=="
# }

# audio = {
#     "midnight_echoes.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PGZvcm1hdCBwcm9maWxlPSJXM0MiIC8+PC9tZXRhPg0KAAAAAExhdmY1OC4yOS4xMDA=",
#     "city_lights.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PGZvcm1hdCBwcm9maWxlPSJXM0MiIC8+PC9tZXRhPg0KAAAAAExhdmY1OC4yOS4xMDA=",
#     "heart_on_replay.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PGZvcm1hdCBwcm9maWxlPSJXM0MiIC8+PC9tZXRhPg0KAAAAAExhdmY1OC4yOS4xMDA=",
#     "rooftop_anthem.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PGZvcm1hdCBwcm9maWxlPSJXM0MiIC8+PC9tZXRhPg0KAAAAAExhdmY1OC4yOS4xMDA=",
#     "cloudwalking.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PGZvcm1hdCBwcm9maWxlPSJXM0MiIC8+PC9tZXRhPg0KAAAAAExhdmY1OC4yOS4xMDA=",
#     "rainy_metro.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PGZvcm1hdCBwcm9maWxlPSJXM0MiIC8+PC9tZXRhPg0KAAAAAExhdmY1OC4yOS4xMDA="
# }

# # Output directories
# os.makedirs("backend/static/assets/covers", exist_ok=True)
# os.makedirs("backend/static/assets/audio", exist_ok=True)

# # Write cover files
# for filename, b64data in covers.items():
#     path = f"backend/static/assets/covers/{filename}"
#     with open(path, "wb") as f:
#         f.write(base64.b64decode(b64data))
#     print("Created:", path)

# # Write audio files
# for filename, b64data in audio.items():
#     path = f"backend/static/assets/audio/{filename}"
#     with open(path, "wb") as f:
#         f.write(base64.b64decode(b64data))
#     print("Created:", path)

# print("\nAll assets generated successfully!")


# Generates small placeholder binary files for audio so the player doesn't 404.
import base64, os

audio_b64 = {
    "kahani_1.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PC9tZXRhPg==",
    "kahani_2.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PC9tZXRhPg==",
    "kahani_3.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PC9tZXRhPg==",
    "kahani_4.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PC9tZXRhPg==",
    "kahani_5.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PC9tZXRhPg==",
    "kahani_6.mp3": "SUQzAwAAAAAAQ1JTQVRDAAAAPG1ldGE+PC9tZXRhPg=="
}

out_dir = "backend/static/assets/audio"
os.makedirs(out_dir, exist_ok=True)

for name, b64 in audio_b64.items():
    path = os.path.join(out_dir, name)
    with open(path, "wb") as f:
        f.write(base64.b64decode(b64))
    print("Created:", path)

print("Placeholder audio files created.")
