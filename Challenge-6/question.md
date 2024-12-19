Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
2. See index.css

Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 


//Hint

JS
- Create snowflakes with .createElement.
- Give each snowflake a CSS class of "snowflake".
- Use emojis to render the snowflakes. Style them however you like! font-size and animation duration will help 😉
- Add snowflakes to the DOM with appendChild.

CSS
- The snowflakes should be absolutely positioned. 
- The animation should be linear and infinite.
- You could animate this using transform/translate on the Y axis.