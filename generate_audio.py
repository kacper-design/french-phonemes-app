from gtts import gTTS
import os

# List of words from your table
words = [
    "lit", "il", "lyre", "ours", "genou", "roue", "tortue", "rue", "vêtu",
    "avion", "ami", "patte", "âne", "pas", "pâte", "ange", "sans", "vent",
    "mot", "eau", "zone", "saule", "os", "fort", "donner", "sol", "lion",
    "ton", "ombre", "bonté", "école", "blé", "aller", "chez", "aigle",
    "lait", "merci", "fête", "lapin", "brin", "plein", "bain", "feu",
    "peu", "deux", "meuble", "peur", "parfum", "lundi", "brun", "requin",
    "premier", "fusée", "photo", "neuf", "feu", "vache", "vous", "rêve",
    "serpent", "tasse", "nation", "celui", "ça", "zèbre", "zéro", "maison",
    "rose", "chat", "tâche", "schéma", "jupe", "gilet", "geôle", "lune",
    "lent", "sol", "robot", "venir", "pomme", "soupe", "père", "balle",
    "bon", "robe", "mouton", "mot", "flamme", "tambour", "terre", "vite",
    "dent", "dans", "aide", "nuage", "animal", "nous", "tonne", "cadeau",
    "cou", "qui", "sac", "képi", "gâteau", "bague", "gare", "gui", "peigne",
    "agneau", "vigne", "quille", "yeux", "pied", "panier", "oiseau", "oui",
    "fouet", "puit", "huile", "lui"
]

# Output folder
output_folder = "french_audio"
os.makedirs(output_folder, exist_ok=True)

# Generate and save audio
for word in words:
    tts = gTTS(text=word, lang='fr')
    filename = f"{output_folder}/{word}.mp3"
    tts.save(filename)
    print(f"Saved: {filename}")