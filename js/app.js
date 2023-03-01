import { fetchJoke } from "./data.js";
import { renderJoke } from "./ui.js"

const button = document.querySelector("button");

(() => {
    fetchJoke().then(joke => renderJoke(joke));
})();

const getNewJoke = () => {
    fetchJoke().then((joke) => {renderJoke(joke)});   
};

button.addEventListener('click', getNewJoke);