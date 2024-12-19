
// Get references to DOM elements
const itemInput = document.getElementById ('item-input') as HTMLInputElement;
const addItemButton = document.getElementById('add-item-button') as HTMLButtonElement;
const shrawitemTextpingList = document.getElementById('shopping-list') as HTMLUListElement;
let listArr:string[] = [];



// update the listarr after edit

function updatelist(editname: HTMLInputElement){

    let index=0;

    listArr.forEach((name,ind)=>{
        if(name===editname.value){
            index=ind;
        }
    })

    listArr[index] = editname.value;


}


// Function to check item is not duplicate

function checkDuplicate(taskname : HTMLInputElement) {
    
    /* ⚠️ You need to add code to this function! ⚠️*/

    if(taskname){
        if(taskname.value==''){
            alert('Please Enter a Gift Name!');
        }

        else{

            //removing extra spaces

            const rawitemText:string = taskname.value;
            let itemText:string='';

                let st=0,end=rawitemText.length-1,sp=0;

                for(let i=0;i<rawitemText.length;i++){
                    if(rawitemText[i]!==' '){
                       st=i;
                       break;
                    }
                   
                }
                
                for(let i=rawitemText.length-1;i>=0;i--){
                    if(rawitemText[i]!==' '){
                        end=i;
                        break;
                     }
                }

                for(let i=st;i<=end;i++){
                    if(rawitemText[i]==' ' && sp===0){
                        itemText+=' ';
                        sp++;
                    }
                    else if(rawitemText[i]!==' '){
                        itemText+=rawitemText[i];
                        sp=0;
                    }
                }

                //checking duplicats

                if(listArr.length===0){

                    return true;
                }

                else{

                    listArr.forEach((gift)=>{
                        
                        if(gift.toLowerCase()===itemText.toLowerCase()){

                            alert("The item already on the list");
                            itemInput.value = '';
                            return false;
                        }
    
                    })
                                          
                    return true;
                
                }

        }
    }
  
}


// Function to add an item to the shrawitemTextping list 
function renderList() {

    shrawitemTextpingList.innerHTML ='';

    listArr.forEach((rawitemText) => {
 
        const listItem = document.createElement('li');

        const listItemContainer = document.createElement('div');

        const buttons = document.createElement('div');
        buttons.className='buttons';

        const editbtn = document.createElement('i');
        editbtn.className="fa-solid fa-pen";

        const deletebtn = document.createElement('i');
        deletebtn.className="fa-solid fa-trash";

        listItemContainer.className='listItemContainer';
        
        listItem.textContent = rawitemText;

        listItemContainer.appendChild(listItem);
        buttons.appendChild(editbtn);
        buttons.appendChild(deletebtn);
        listItemContainer.appendChild(buttons);

        
        shrawitemTextpingList.appendChild(listItemContainer);

        const deletebtnelements = document.querySelectorAll('.fa-trash');
        const editbtnelements = document.querySelectorAll('.fa-pen');


        // delete task

        deletebtnelements?.forEach((btns)=>{
            btns.addEventListener('click',()=>{

                const delelement = btns.parentElement?.parentElement as HTMLLIElement;

                listArr = listArr.filter((gift)=>{

                    return (delelement?.firstChild?.textContent !== gift );
                })

                shrawitemTextpingList.removeChild(delelement);
            })
        })

        // Edit name

        editbtnelements?.forEach((btns)=>{

            btns.addEventListener('click',()=>{

                const popup = document.querySelector('.edit-popup') as HTMLDivElement;
                const editname = document.querySelector('.edit-name') as HTMLInputElement;
                const editnamebutton = document.querySelector('.edit-button') as HTMLButtonElement;

                popup.style.visibility='visible';

                const editelement = btns.parentElement?.parentElement as HTMLLIElement;

                if(editelement.firstChild?.textContent)
                editname.value = editelement.firstChild?.textContent;

                editnamebutton.addEventListener('click',()=>{

                    if(checkDuplicate(editname)){
                        console.log(listArr);
                        console.log(editname.value);
                        updatelist(editname);
                        console.log(listArr);
                        renderList();
                        popup.style.visibility='hidden';
                    }
                })



                
            })
        })
    })

    itemInput.value = ''; // Clear the input field

    
}

// Add event listener to button
addItemButton?.addEventListener('click', ()=>{
    if( checkDuplicate(itemInput)  === true){
        alert();
        listArr.push(itemInput.value);
        renderList();
}
})

// Allow adding items by pressing Enter key
itemInput?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if(checkDuplicate(itemInput)) {
            listArr.push(itemInput.value);
            renderList();
    }
   }
})
