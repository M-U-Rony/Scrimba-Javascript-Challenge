/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from './data.js';

let filmsCopy = [...films];

const emojiContainer = document.querySelector('.emoji-container');
const guessinput = document.querySelector('#input-value');
const sbmitBtn = document.querySelector('.submit-btn');
const msgcontainer = document.querySelector('.message-container');
const main = document.querySelector('main');

function getRandomFilm() {

    let randomIndex = Math.floor(Math.random() * filmsCopy.length);
    let randomFilm = filmsCopy[randomIndex];
    filmsCopy.splice(randomIndex, 1);
    return randomFilm;
}

function displayEmoji(film) {

    emojiContainer.innerHTML = '';

    let emojies = '';

    film.emoji.forEach(emoji => {
       emojies += emoji;
       emojies += ' ';
    });

    emojiContainer.innerHTML = emojies;
}

function checkGuess(guess){


if(guess.toLowerCase()===film.title.toLowerCase()){

    msgcontainer.textContent = 'Correct!';
    
    guessinput.value = '';

        setTimeout(()=>{

            if(filmsCopy.length===0){
                main.innerHTML= '';
                const endmsg = document.createElement('h1');
                endmsg.textContent = "That's all folks!"
                main.appendChild(endmsg);
                return;
            }

            guessremaining= 3;
            film =getRandomFilm();
            displayEmoji(film);
            guessinput.value = '';
            msgcontainer.textContent='You have 3 guesses remaining.';
    
        },3000)

}


else{

   

    guessremaining--;

    if(guessremaining===0){

        msgcontainer.textContent= film.title;

        setTimeout(()=>{

            if(filmsCopy.length===0){
                main.innerHTML= '';
                const endmsg = document.createElement('h1');
                endmsg.textContent = "That's all folks!"
                main.appendChild(endmsg);
                return;
            }

            guessremaining=3;

            film =getRandomFilm();
            displayEmoji(film);
            guessinput.value = '';
            msgcontainer.textContent='You have 3 guesses remaining.';
    
        },3000)

        return;
    }

    guessinput.value = '';
    msgcontainer.textContent = `Incorrect! You have ${guessremaining} more guesses.`;

}
}

sbmitBtn.addEventListener('click', (e)=> {

    e.preventDefault();

    let guess = guessinput.value;

    if(guess === '') {
        alert('Please enter your guess');
        return;
    }

    checkGuess(guess);
});

let guessremaining = 3;
let film =getRandomFilm();
displayEmoji(film);
