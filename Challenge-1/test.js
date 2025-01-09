
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const shrawitemTextpingList = document.getElementById('shopping-list');
let listArr = [];

if(localStorage.getItem('list')){
    let xx = localStorage.getItem('list');
    listArr = JSON.parse(xx);
}


function deleteItem(){

    const deletebtnelements = document.querySelectorAll('.fa-trash');

    deletebtnelements.forEach((btns) => {

        btns.addEventListener('click', () => {
                
            const delelement = btns.parentElement.parentElement;

            listArr = listArr.filter((gift) => {
                    
               return(delelement.firstChild.textContent !==gift );
            });

            localStorage.setItem('list',JSON.stringify(listArr));

           renderList();

        });
    });    
}

function updateitem(text){

    const editedTexttag = document.querySelector('.inputtag');
    const editedText = editedTexttag.value;

    if(checkDuplicate(editedTexttag)){

        for(let i=0;i<listArr.length;i++){
            if(listArr[i]===text){
                listArr[i] = editedText;
                localStorage.setItem('list',JSON.stringify(listArr));
                break;
            }
        }

        renderList();
       
    }

}

function editItem() {

    const editbtnelements = document.querySelectorAll('.fa-pen');

    editbtnelements.forEach((btns) => {

        btns.addEventListener('click', () => {
                
            const editelement = btns.parentElement.parentElement;

            const text = editelement.children[0].textContent;
           
            editelement.innerHTML = '';

            const inputtag = document.createElement('input');
            inputtag.value = text;
            inputtag.className = 'inputtag';

            const ok = document.createElement('i');
            ok.className = "fa-solid fa-check";
    

            editelement.appendChild(inputtag);
            editelement.appendChild(ok);

            document.querySelector('.fa-check').addEventListener('click',()=>{

                updateitem(text);
            })
            

        });
    });   

}



function checkDuplicate(taskname) {


        if (taskname.value == '') {
            alert('Please Enter a Gift Name!');
        }

        else {
         
            let rawitemText = taskname.value;
            let itemText = '';

            let sp = 0;

            rawitemText=rawitemText.trim();

            for (let i = 0; i <rawitemText.length; i++) {
                if (rawitemText[i] == ' ' && sp === 0) {
                    itemText += ' ';
                    sp++;
                }
                else if (rawitemText[i] !== ' ') {
                    itemText += rawitemText[i];
                    sp = 0;
                }
            }

            //checking duplicats
            if (listArr.length === 0) {
                
                return true;
            }

            else {

                for(let gift of listArr){

                    if (gift.toLowerCase() === itemText.toLowerCase()) {
                        alert("The item already on the list");
                        itemInput.value = '';
                        return false;
                    }

                }

                return true;
            }
        }
 
}


function renderList() {

    shrawitemTextpingList.innerHTML = '';

    listArr.forEach((rawitemText) => {

        const listItem = document.createElement('li');

        const listItemContainer = document.createElement('div');

        const buttons = document.createElement('div');
        buttons.className = 'buttons';

        const editbtn = document.createElement('i');
        editbtn.className = "fa-solid fa-pen";

        const deletebtn = document.createElement('i');
        deletebtn.className = "fa-solid fa-trash";

        listItemContainer.className = 'listItemContainer';

        listItem.textContent = rawitemText;

        listItemContainer.appendChild(listItem);
        buttons.appendChild(editbtn);
        buttons.appendChild(deletebtn);
        listItemContainer.appendChild(buttons);

        shrawitemTextpingList.appendChild(listItemContainer);

        
    });

    itemInput.value = '';
    deleteItem();
    editItem();

}

// Add event listener to button
addItemButton.addEventListener('click', () => {

    if (checkDuplicate(itemInput)) {

        listArr.push(itemInput.value);
        localStorage.setItem('list',JSON.stringify(listArr));
        renderList();
    }
});


// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {

        if (checkDuplicate(itemInput)) {

            listArr.push(itemInput.value);
            
            localStorage.setItem('list',JSON.stringify(listArr));
            renderList();
        }
    }
});

renderList();
