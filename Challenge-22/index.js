import { addresses } from './addresses.js'

const labelsContainer = document.querySelector('.labels-container')

for(let invite of addresses){

    if(invite['isOnChristmasList']){
       
        const labels = document.createElement('div');
        labels.className='labels';

        const name = document.createElement('p');
        const address = document.createElement('p');
        const town = document.createElement('p');
        const state = document.createElement('p');
        const country = document.createElement('p');
        const icon1 = document.createElement('span');
        const icon2 = document.createElement('span');

        icon1.className='icon1';
        icon2.className='icon2';

        name.innerHTML = "<i>name: </i>" + `<b> ${invite['name']} </b>`;
        address.innerHTML = "<i>address: </i>" + `<b> ${invite['address line 1']} </b>`;
        town.innerHTML = "<i>town: </i>" + `<b> ${invite['town']} </b>`;
        state.innerHTML ="<i>state: </i>" + `<b> ${invite['state']} </b>`;
        country.innerHTML ="<i>country: </i>" + `<b> ${invite['country']} </b>`;

        labels.appendChild(icon1);
        labels.appendChild(name);
        labels.appendChild(address);
        labels.appendChild(town);
        labels.appendChild(state);
        labels.appendChild(country);
        labels.appendChild(icon2);

        labelsContainer.appendChild(labels);
        


    }

}