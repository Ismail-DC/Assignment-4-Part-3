// Get reference to the canvas element
const canvas = document.querySelector("canvas");

// Set canvas dimensions to match the viewport
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
