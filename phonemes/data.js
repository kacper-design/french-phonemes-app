const consonantPhonemes = [
  { phoneme: '[f]', type: 'consonant', words: [
    { word: 'fusée', translation: 'rocket', emoji: '🚀', highlight: 'f' },
    { word: 'photo', translation: 'photo', emoji: '📸', highlight: 'ph' },
    { word: 'neuf', translation: 'nine', emoji: '9️⃣', highlight: 'f' },
    { word: 'feu', translation: 'fire', emoji: '🔥', highlight: 'f' }
  ]},
  { phoneme: '[v]', type: 'consonant', words: [
    { word: 'vache', translation: 'cow', emoji: '🐄', highlight: 'v' },
    { word: 'vous', translation: 'you', emoji: '🫵', highlight: 'v' },
    { word: 'rêve', translation: 'dream', emoji: '💭', highlight: 'v' }
  ]},
  { phoneme: '[s]', type: 'consonant', words: [
    { word: 'serpent', translation: 'snake', emoji: '🐍', highlight: 's' },
    { word: 'tasse', translation: 'cup', emoji: '☕', highlight: 'ss' },
    { word: 'nation', translation: 'nation', emoji: '🌍', highlight: 'ti' },
    { word: 'celui', translation: 'the one', emoji: '👤', highlight: 'c' },
    { word: 'ça', translation: 'that', emoji: '👉', highlight: 'ç' }
  ]},
  { phoneme: '[z]', type: 'consonant', words: [
    { word: 'zèbre', translation: 'zebra', emoji: '🦓', highlight: 'z' },
    { word: 'zéro', translation: 'zero', emoji: '0️⃣', highlight: 'z' },
    { word: 'maison', translation: 'house', emoji: '🏠', highlight: 's' },
    { word: 'rose', translation: 'rose', emoji: '🌹', highlight: 's' }
  ]},
  { phoneme: '[b]', type: 'consonant', words: [
    { word: 'balle', translation: 'ball', emoji: '🏐', highlight: 'b' },
    { word: 'bon', translation: 'good', emoji: '👍', highlight: 'b' },
    { word: 'robe', translation: 'dress', emoji: '👗', highlight: 'b' }
  ]},
  { phoneme: '[m]', type: 'consonant', words: [
    { word: 'mouton', translation: 'sheep', emoji: '🐑', highlight: 'm' },
    { word: 'mot', translation: 'word', emoji: '📝', highlight: 'm' },
    { word: 'flamme', translation: 'flame', emoji: '🔥', highlight: 'mm' }
  ]},
  { phoneme: '[t]', type: 'consonant', words: [
    { word: 'tambour', translation: 'drum', emoji: '🥁', highlight: 't' },
    { word: 'terre', translation: 'earth', emoji: '🌍', highlight: 't' },
    { word: 'vite', translation: 'fast', emoji: '⚡', highlight: 't' }
  ]},
  { phoneme: '[d]', type: 'consonant', words: [
    { word: 'dent', translation: 'tooth', emoji: '🦷', highlight: 'd' },
    { word: 'dans', translation: 'in', emoji: '📦', highlight: 'd' },
    { word: 'aide', translation: 'help', emoji: '🆘', highlight: 'd' }
  ]},
  { phoneme: '[k]', type: 'consonant', words: [
    { word: 'cadeau', translation: 'gift', emoji: '🎁', highlight: 'c' },
    { word: 'cou', translation: 'neck', emoji: '🦒', highlight: 'c' },
    { word: 'qui', translation: 'who', emoji: '❓', highlight: 'qu' },
    { word: 'sac', translation: 'bag', emoji: '👜', highlight: 'c' },
    { word: 'képi', translation: 'cap', emoji: '🧢', highlight: 'k' }
  ]},
  { phoneme: '[g]', type: 'consonant', words: [
    { word: 'gâteau', translation: 'cake', emoji: '🎂', highlight: 'g' },
    { word: 'bague', translation: 'ring', emoji: '💍', highlight: 'g' },
    { word: 'gare', translation: 'station', emoji: '🚉', highlight: 'g' },
    { word: 'gui', translation: 'mistletoe', emoji: '🌿', highlight: 'g' }
  ]},
  { phoneme: '[ɲ]', type: 'consonant', words: [
    { word: 'peigne', translation: 'comb', emoji: '💇‍♂️', highlight: 'gn' },
    { word: 'agneau', translation: 'lamb', emoji: '🐑', highlight: 'gn' },
    { word: 'vigne', translation: 'vine', emoji: '🍇', highlight: 'gn' }
  ]},
  { phoneme: '[j]', type: 'consonant', words: [
    { word: 'quille', translation: 'pin', emoji: '🎳', highlight: 'ill' },
    { word: 'yeux', translation: 'eyes', emoji: '👀', highlight: 'eu' },
    { word: 'pied', translation: 'foot', emoji: '🦶', highlight: 'ie' },
    { word: 'panier', translation: 'basket', emoji: '🧺', highlight: 'ier' }
  ]},
  { phoneme: '[w]', type: 'consonant', words: [
    { word: 'oiseau', translation: 'bird', emoji: '🐦', highlight: 'oi' },
    { word: 'oui', translation: 'yes', emoji: '✅', highlight: 'ou' },
    { word: 'fouet', translation: 'whip', emoji: '🥄', highlight: 'ou' }
  ]},
  { phoneme: '[ɥ]', type: 'consonant', words: [
    { word: 'puit', translation: 'well', emoji: '⛲', highlight: 'ui' },
    { word: 'huile', translation: 'oil', emoji: '🛢️', highlight: 'ui' },
    { word: 'lui', translation: 'him', emoji: '👨', highlight: 'ui' }
  ]}
];

const vowelPhonemes = [
  { phoneme: '[i]', type: 'vowel', words: [
    { word: 'lit', translation: 'bed', emoji: '🛏️', highlight: 'i' },
    { word: 'il', translation: 'he', emoji: '👤', highlight: 'i' },
    { word: 'lyre', translation: 'lyre', emoji: '🎼', highlight: 'y' }
  ]},
  { phoneme: '[u]', type: 'vowel', words: [
    { word: 'ours', translation: 'bear', emoji: '🐻', highlight: 'ou' },
    { word: 'genou', translation: 'knee', emoji: '🦵', highlight: 'ou' },
    { word: 'roue', translation: 'wheel', emoji: '🛞', highlight: 'ou' }
  ]},
  { phoneme: '[y]', type: 'vowel', words: [
    { word: 'tortue', translation: 'turtle', emoji: '🐢', highlight: 'u' },
    { word: 'rue', translation: 'street', emoji: '🛣️', highlight: 'u' },
    { word: 'vêtu', translation: 'dressed', emoji: '👕', highlight: 'u' }
  ]},
  { phoneme: '[a]', type: 'vowel', words: [
    { word: 'avion', translation: 'plane', emoji: '✈️', highlight: 'a' },
    { word: 'ami', translation: 'friend', emoji: '👫', highlight: 'a' },
    { word: 'patte', translation: 'paw', emoji: '🐾', highlight: 'a' }
  ]},
  { phoneme: '[ɑ]', type: 'vowel', words: [
    { word: 'âne', translation: 'donkey', emoji: '🐴', highlight: 'â' },
    { word: 'pas', translation: 'step', emoji: '👣', highlight: 'a' },
    { word: 'pâte', translation: 'paste', emoji: '🍝', highlight: 'â' }
  ]},
  { phoneme: '[ɑ̃]', type: 'vowel', words: [
    { word: 'ange', translation: 'angel', emoji: '👼', highlight: 'an' },
    { word: 'sans', translation: 'without', emoji: '🚫', highlight: 'an' },
    { word: 'vent', translation: 'wind', emoji: '🌬️', highlight: 'en' }
  ]},
  { phoneme: '[o]', type: 'vowel', words: [
    { word: 'mot', translation: 'word', emoji: '📝', highlight: 'o' },
    { word: 'eau', translation: 'water', emoji: '💧', highlight: 'eau' },
    { word: 'zone', translation: 'zone', emoji: '🌐', highlight: 'o' },
    { word: 'saule', translation: 'willow', emoji: '🌳', highlight: 'au' }
  ]},
  { phoneme: '[ɔ]', type: 'vowel', words: [
    { word: 'os', translation: 'bone', emoji: '🦴', highlight: 'o' },
    { word: 'fort', translation: 'strong', emoji: '💪', highlight: 'or' },
    { word: 'donner', translation: 'to give', emoji: '🎁', highlight: 'on' },
    { word: 'sol', translation: 'ground', emoji: '🪨', highlight: 'o' }
  ]},
  { phoneme: '[ɔ̃]', type: 'vowel', words: [
    { word: 'lion', translation: 'lion', emoji: '🦁', highlight: 'on' },
    { word: 'ton', translation: 'your', emoji: '👉', highlight: 'on' },
    { word: 'ombre', translation: 'shadow', emoji: '🌑', highlight: 'om' },
    { word: 'bonté', translation: 'kindness', emoji: '❤️', highlight: 'on' }
  ]},
  { phoneme: '[e]', type: 'vowel', words: [
    { word: 'école', translation: 'school', emoji: '🏫', highlight: 'é' },
    { word: 'blé', translation: 'wheat', emoji: '🌾', highlight: 'é' },
    { word: 'aller', translation: 'to go', emoji: '🚶‍♂️', highlight: 'er' },
    { word: 'chez', translation: 'at (someone\'s)', emoji: '🏠', highlight: 'ez' }
  ]},
  { phoneme: '[ɛ]', type: 'vowel', words: [
    { word: 'aigle', translation: 'eagle', emoji: '🦅', highlight: 'ai' },
    { word: 'lait', translation: 'milk', emoji: '🥛', highlight: 'ai' },
    { word: 'merci', translation: 'thank you', emoji: '🙏', highlight: 'e' },
    { word: 'fête', translation: 'party', emoji: '🥳', highlight: 'ê' }
  ]},
  { phoneme: '[ɛ̃]', type: 'vowel', words: [
    { word: 'lapin', translation: 'rabbit', emoji: '🐇', highlight: 'in' },
    { word: 'brin', translation: 'sprig', emoji: '🌱', highlight: 'in' },
    { word: 'plein', translation: 'full', emoji: '🍽️', highlight: 'ein' },
    { word: 'bain', translation: 'bath', emoji: '🛁', highlight: 'ain' }
  ]},
  { phoneme: '[ø]', type: 'vowel', words: [
    { word: 'feu', translation: 'fire', emoji: '🔥', highlight: 'eu' },
    { word: 'peu', translation: 'little', emoji: '🟰', highlight: 'eu' },
    { word: 'deux', translation: 'two', emoji: '2️⃣', highlight: 'eu' }
  ]},
  { phoneme: '[œ]', type: 'vowel', words: [
    { word: 'meuble', translation: 'furniture', emoji: '🪑', highlight: 'eu' },
    { word: 'peur', translation: 'fear', emoji: '😱', highlight: 'eu' }
  ]},
  { phoneme: '[œ̃]', type: 'vowel', words: [
    { word: 'parfum', translation: 'perfume', emoji: '🌸', highlight: 'un' },
    { word: 'lundi', translation: 'Monday', emoji: '📅', highlight: 'un' },
    { word: 'brun', translation: 'brown', emoji: '🟫', highlight: 'un' }
  ]},
  { phoneme: '[ə]', type: 'vowel', words: [
    { word: 'requin', translation: 'shark', emoji: '🦈', highlight: 'e' },
    { word: 'premier', translation: 'first', emoji: '🥇', highlight: 'e' }
  ]}
];