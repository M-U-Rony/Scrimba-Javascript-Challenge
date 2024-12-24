
let anagrams = [
    ["Can Assault", "Santa Claus"],
    ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
    ["Frosty The Snowman", "Honesty Warms Front"],
    ["Drastic Charms", "Christmas Cards"],
    ["Congress Liar", "Carol Singers"],
    ["The Tin Glints", "Silent Night"],
    ["Be The Helm", "Betlehem"],
    ["Is Car Thieves", "Christmas Eve"]
];

const correctanagrams=[];

function findAnagrams(array) {
    // write your code here

    anagrams.forEach(element =>{

        let fword= '';
        let sword= '';

        for(let i=0;i<element[0].length;i++){
            if(element[0][i]!==' '){
                fword+=element[0][i];
            }
        }

        for(let i=0;i<element[1].length;i++){
            if(element[1][i]!==' '){
                sword+=element[1][i];
            }
        }

        fword=fword.toLowerCase();
        sword=sword.toLowerCase();

        fword= fword.split('').sort().join('');
        sword= sword.split('').sort().join('');

        if(fword===sword){
            correctanagrams.push([element[0],element[1]]);
        }

        
    })


}

findAnagrams(anagrams);

console.log(correctanagrams);


