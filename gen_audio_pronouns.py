import os
from gtts import gTTS

# Output folder
output_dir = 'pronouns/audio'
os.makedirs(output_dir, exist_ok=True)

# Flattened list of all unique pronoun words
pronoun_words = [
    "je", "moi", "mon", "ma", "mes",
    "tu", "toi", "ton", "ta", "tes",
    "il", "elle", "on", "lui", "son", "sa", "ses",
    "nous", "notre", "nos",
    "vous", "votre", "vos",
    "ils", "elles", "eux", "leur", "leurs"
]

# De-duplicate and sort
unique_words = sorted(set(pronoun_words))

# Generate audio for each word
for word in unique_words:
    tts = gTTS(text=word, lang='fr')
    filename = os.path.join(output_dir, f"{word}.mp3")
    tts.save(filename)
    print(f"✔️ Saved: {filename}")
