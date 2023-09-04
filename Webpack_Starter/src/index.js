import generateJoke from "./generateJoke";
import image from "../asset/pexels.jpg";
import "./style.css";

/**
 * @type {HTMLImageElement}
 */
let img = document.querySelector("#image");
let list = document.querySelectorAll("li");
img.src = image;
list.forEach((value) => {
  value.setAttribute("class", "we");
});

console.log(generateJoke());
console.log(1);
