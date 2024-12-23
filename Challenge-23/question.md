Santa has been hacked! In the list of kids to deliver to, the Grinch has replaced some kids' names with his own name.

The original array looked like this: 
['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']

**Task** 
Remove 'Grinch' from santasArr and put the missing kids back in their original places!

**Stretch goal**
- Do this without creating a new array and using no array methods other than .forEach().

//Hint

- You will probably want to iterate over santasArr and check if an element is 'Grinch'.

- As you iterate, be sure to keep a track of the index you are on!
(Array methods like .map() and .forEach() have a parameter which does exactly that!).

- Use a let to store the index of the next name from missingNamesArr to be added back to santasArr. 

- You should then be able to use the index of each 'Grinch' to replace 'Grinch' with a missing name.
