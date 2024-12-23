
const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}


/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/ 
function emojifyWord(word){

    if (word[0]===':' && word[word.length-1]===':'){

        let wordWithoutColon = '';

        for(let i=1;i<word.length-1;i++){
            wordWithoutColon+=word[i];
        }

        let flag=0,ans='';


        Object.entries(hackedEmojis).forEach(([key,value]) => {

            if(key===wordWithoutColon){
               flag=1;
               ans=value;
            }
            
        });

        if(flag) return ans;

        else
        return word;

       

    }

    else 
    return word;
}

console.log(emojifyWord(":angry:"));


/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/ 

function emojifyPhrase(phrase){

    let word = '';

    let ans= '';
    
    for(let index in phrase){

        if(phrase[index]===' '){
            ans += (emojifyWord(word));
            ans+= ' ';
            word='';
        }
        else{
            word+=phrase[index];
        }
        
       
    }

    if(word!==''){
        ans += (emojifyWord(word));
    }

    return ans;
}

console.log(emojifyPhrase("Just read your article :thumbsdown:"));


// Stretch goal: don't just replace the shortcodes, but also 
// any emojis are added directly to the text.


