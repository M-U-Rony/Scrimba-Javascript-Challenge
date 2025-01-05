import { feedData } from './data.js'

function loadavatar(){

const avatarsection = document.querySelector('.feed-avatars');

avatarsection.innerHTML =  feedData.map(person =>{
    return `<img class='avatar' src='./images/${person.avatarUrl}'/>`;
}).join('');

}

function addRedcircle(index){

    const avatars = document.querySelectorAll('.avatar');
    avatars[index].classList.add('highlight');

}

function addGraybackground(index){

    const avatars = document.querySelectorAll('.avatar');
    avatars[index].classList.add('seen');

}


function displayImages(person){

    const imagesection = document.querySelector('.feed-images');
    imagesection.innerHTML = '';

    let photo = 0;

    const image = document.createElement('img');
    image.className = 'feature-image';

    addRedcircle(person);

    image.src = './images/' + feedData[person].features[photo].imageUrl;
    image.alt = feedData[person].features[photo].alt;
    imagesection.appendChild(image);

    console.log(ispause);

    const intervalId = setInterval(() =>{

        if(ispause===false){

            photo++;
            
            if( photo === feedData[person].features.length){
                
                addGraybackground(person);
                photo = 0;

                person++;

                if(person === feedData.length){

                    clearInterval(intervalId);

                    imagesection.innerHTML = '';

                    const endText = document.createElement('p');
                    endText.textContent = 'Refresh to load new images';
                    endText.className = 'ux-message';

                    imagesection.appendChild(endText);

                    return;
                }

                addRedcircle(person);
            }
            
            image.src = './images/' + feedData[person].features[photo].imageUrl;
            image.alt = feedData[person].features[photo].alt;

        }
 
        },2000)
       
}

loadavatar();

let avatars = document.querySelectorAll('.avatar');

avatars.forEach((avatar,index) => {
    avatar.addEventListener('click', () =>{
        displayImages(index);
    });
});

let ispause = false;

const imagesection = document.querySelector('.feed-images');

imagesection.addEventListener('click', () =>{
    if(ispause){
        ispause = false;
    }else{
        ispause = true;
    }
})
