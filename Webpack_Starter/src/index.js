import generateJoke from "./generateJoke";
import image from "../asset/pexels.jpg";

/**
 * @type {HTMLImageElement}
 */
let img = document.querySelector("#image");
img.src = image;

console.log(generateJoke());
console.log(1);
