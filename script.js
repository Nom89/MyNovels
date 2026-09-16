// My story list — change these to your own!
const stories = [
    "Where the flowers lies",
    "Nameless Houses",
    "The Graves of happiness",
    "Magical BEings!",
    "Creatures I hate"
];

// Find where to put them
const list = document.getElementById("story-list");

// Show each story with a number and book emoji
stories.forEach((story, index) => {
    list.innerHTML += `<p>📖 Episode ${index + 1}- ${story}</p>`;
});