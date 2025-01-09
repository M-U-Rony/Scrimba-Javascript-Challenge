const emojis = ['🎄', '🎁', '🎅', '☃️','🎄', '🎁', '🎅', '☃️']; // Your set of emojis


const container = document.querySelector('.game-container');
const values = [];
let total = 0,first='',firstidx=0,score=0;

for(let i=0;i<8;i++){

    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = '?';
    container.appendChild(card);

}

while(values.length<8){

    const index = Math.floor(Math.random()*8);

    if(!values.includes(index)){
        values.push(index);
    }
}


const cards = document.querySelectorAll('.card');

cards.forEach( (card,ind) => {

    card.addEventListener('click',()=>{

        if(total<2){

            total++;

            card.className = 'card revealed';
            card.textContent= emojis[values[ind]];

            if(total===1){

                first=  emojis[values[ind]];
                firstidx = ind;
            }

            else{

                if(first===emojis[values[ind]]){
                    score++;
                    document.querySelector('.score').textContent = `Your Score is: ${score}`;
                    card.className = 'card revealed';
                    card.textContent= emojis[values[ind]];
                    total=0;
                    
                }

                else{

                    score--;

                    document.querySelector('.score').textContent = `Your Score is: ${score}`;

                    setTimeout(()=>{

                    card.className='card';
                    card.textContent='?';
                    cards[firstidx].className='card';
                    cards[firstidx].textContent='?';
                    total=0;

                    },2000)

                }

            }

        }
  
    })
})


