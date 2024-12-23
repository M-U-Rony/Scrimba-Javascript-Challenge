let calendarContainer = document.getElementById('calendar');

const gifts = ['🍪','🍬','🍭','🍫','🎮','🧸','💻','📷','🖥️'];


function randar(){

    calendarContainer.innerHTML='';

    for (let i = 1; i <= 24; i++) {

        let box = document.createElement('li');
        box.classList.add('calendar-box');
    
        let number = document.createElement('span');
        number.innerHTML = i;
    
        let description = document.createElement('span');

        box.appendChild(number);
        
       
        if(localStorage.getItem(`${i}`)){

            let icon = document.createElement('span');
            icon.append(localStorage.getItem(`${i}`));
            box.appendChild(icon);
            description.innerHTML = '';
    
        }

        else{

            let icon = document.createElement('i');
            icon.classList.add('fas', 'fa-gift');
            description.innerHTML = "Open me!";
            box.appendChild(icon);

        }
    
        
        
        box.appendChild(description);
        calendarContainer.appendChild(box);
    
    }

    const eachbox = document.querySelectorAll('.calendar-box');

eachbox.forEach(box =>{
    box.addEventListener('click',()=>{
        const num = box.firstChild.textContent;
        const givenGift = Math.floor(Math.random()*9);
        localStorage.setItem(num,gifts[givenGift]);
        randar();
    })
})

}


randar();



