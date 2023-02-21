const jokeContainer = document.querySelector("#joke");

export const renderJoke = (joke) => {
    let jokeHtml = `<p>${joke.value}</p>`
    jokeContainer.innerHTML = jokeHtml;
};


