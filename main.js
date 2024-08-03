// Get reference to the canvas element
const canvas = document.querySelector("canvas");

// Set canvas dimensions to match the viewport
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Generate a random integer between min and max, inclusive
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random RGB color string
function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

