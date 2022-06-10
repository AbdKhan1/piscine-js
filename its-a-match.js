const normal = new RegExp("hi", "g");
const begin = new RegExp('\\b^(hi)\\b', 'g');
const end = new RegExp('\\b$(hi)\\b', 'g');
const beginEnd = new RegExp('\\b$^(hi)\\b', 'g');
