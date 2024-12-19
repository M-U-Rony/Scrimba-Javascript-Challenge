This is the question of challenge-1

Grandpa has a Christmas wish list to keep track of all the rawitemTexts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.


//Hints-given by scrimba

- The .includes() method could be super useful here.
- There is a JS method specifically for trimming space from the beginning and end of strings.
- You will likely need to use the .replace() method with some regex.

*** ⚠️ Spoiler Alert! Scroll down if you need extra regex help 🛟 ***


- This regex /\s{2,}/g matches sequences of two or more consecutive whitespace characters in a string (don't say I never give you anything 😝).