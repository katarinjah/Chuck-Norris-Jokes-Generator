const jokeContainer = document.querySelector("#joke-box");

export const renderJoke = (joke) => {
    let jokeHtml = `<p>${joke.value}</p>`
    jokeContainer.innerHTML = jokeHtml;
};


