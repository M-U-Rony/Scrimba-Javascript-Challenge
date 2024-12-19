
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)


//Hint

If you are stuck getting started or short of time, there is some starter code in starter.js. This will give you the initial state for the game. But remember: there are multiple ways you could code this game!

As well as the code in starter.js you will likely need two functions:

1. A function to check each guess. This function should decide if the guessed letter exists in the word. If it does, the letter should be displayed, if not, a snowman part should disappear. (Splitting the word into an array and using the includes method could be useful here 😉)

2. A function to check if the game is over. If the game is over, this function should render the appropriate message, and, in the case of a win, reinstate all removed snowman parts and render the sunglasses. Again, the .includes method could be useful here!