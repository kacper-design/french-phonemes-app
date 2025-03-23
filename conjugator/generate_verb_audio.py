import os
import json
from gtts import gTTS

# Path to the JSON file
JSON_PATH = './verb_data.json'
AUDIO_ROOT = './audio'

# Make names safe for filenames
def safe(name):
    return name.replace('/', '_').replace(' ', '_')

# Load data
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    verb_data = json.load(f)

# Loop through verbs
for verb in verb_data:
    infinitive = verb['infinitive']
    folder = os.path.join(AUDIO_ROOT, infinitive)
    os.makedirs(folder, exist_ok=True)

    # Generate infinitive pronunciation
    infinitive_file = os.path.join(folder, f'{infinitive}.mp3')
    if not os.path.exists(infinitive_file):
        tts = gTTS(infinitive, lang='fr')
        tts.save(infinitive_file)
        print(f"✅ Saved {infinitive_file}")
    else:
        print(f"⏭️ Skipped (exists): {infinitive_file}")

    for form in verb['forms']:
        subject = form['subject'].split('/')[0]  # use first subject only
        word = form['form']

        # Conjugated form file (just the verb)
        word_file = os.path.join(folder, f'{safe(word)}.mp3')
        if not os.path.exists(word_file):
            tts1 = gTTS(word, lang='fr')
            tts1.save(word_file)
            print(f"✅ Saved {word_file}")
        else:
            print(f"⏭️ Skipped (exists): {word_file}")

        # Subject + form
        phrase = f'{subject} {word}'
        phrase_file = os.path.join(folder, f'{safe(phrase)}.mp3')
        if not os.path.exists(phrase_file):
            tts2 = gTTS(phrase, lang='fr')
            tts2.save(phrase_file)
            print(f"✅ Saved {phrase_file}")
        else:
            print(f"⏭️ Skipped (exists): {phrase_file}")
