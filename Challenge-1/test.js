"use strict";
/*
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
*/
// Get references to DOM elements
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const shrawitemTextpingList = document.getElementById('shopping-list');
let listArr = [];
// update the listarr after edit
function updatelist(editname) {
    let index = 0;
    listArr.forEach((name, ind) => {
        if (name === editname.value) {
            index = ind;
        }
    });
    listArr[index] = editname.value;
}
// Function to check item is not duplicate
function checkDuplicate(taskname) {
    /* ⚠️ You need to add code to this function! ⚠️*/
    if (taskname) {
        if (taskname.value == '') {
            alert('Please Enter a Gift Name!');
        }
        else {
            //removing extra spaces
            const rawitemText = taskname.value;
            let itemText = '';
            let st = 0, end = rawitemText.length - 1, sp = 0;
            for (let i = 0; i < rawitemText.length; i++) {
                if (rawitemText[i] !== ' ') {
                    st = i;
                    break;
                }
            }
            for (let i = rawitemText.length - 1; i >= 0; i--) {
                if (rawitemText[i] !== ' ') {
                    end = i;
                    break;
                }
            }
            for (let i = st; i <= end; i++) {
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
                listArr.forEach((gift) => {
                    if (gift.toLowerCase() === itemText.toLowerCase()) {
                        alert("The item already on the list");
                        itemInput.value = '';
                        return false;
                    }
                });
                return true;
            }
        }
    }
}
// Function to add an item to the shrawitemTextping list 
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
        const deletebtnelements = document.querySelectorAll('.fa-trash');
        const editbtnelements = document.querySelectorAll('.fa-pen');
        // delete task
        deletebtnelements === null || deletebtnelements === void 0 ? void 0 : deletebtnelements.forEach((btns) => {
            btns.addEventListener('click', () => {
                var _a;
                const delelement = (_a = btns.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                listArr = listArr.filter((gift) => {
                    var _a;
                    return (((_a = delelement === null || delelement === void 0 ? void 0 : delelement.firstChild) === null || _a === void 0 ? void 0 : _a.textContent) !== gift);
                });
                shrawitemTextpingList.removeChild(delelement);
            });
        });
        // Edit name
        editbtnelements === null || editbtnelements === void 0 ? void 0 : editbtnelements.forEach((btns) => {
            btns.addEventListener('click', () => {
                var _a, _b, _c;
                const popup = document.querySelector('.edit-popup');
                const editname = document.querySelector('.edit-name');
                const editnamebutton = document.querySelector('.edit-button');
                popup.style.visibility = 'visible';
                const editelement = (_a = btns.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                if ((_b = editelement.firstChild) === null || _b === void 0 ? void 0 : _b.textContent)
                    editname.value = (_c = editelement.firstChild) === null || _c === void 0 ? void 0 : _c.textContent;
                editnamebutton.addEventListener('click', () => {
                    if (checkDuplicate(editname)) {
                        console.log(listArr);
                        console.log(editname.value);
                        updatelist(editname);
                        console.log(listArr);
                        renderList();
                        popup.style.visibility = 'hidden';
                    }
                });
            });
        });
    });
    itemInput.value = ''; // Clear the input field
}
// Add event listener to button
addItemButton === null || addItemButton === void 0 ? void 0 : addItemButton.addEventListener('click', () => {
    if (checkDuplicate(itemInput) === true) {
        alert();
        listArr.push(itemInput.value);
        renderList();
    }
});
// Allow adding items by pressing Enter key
itemInput === null || itemInput === void 0 ? void 0 : itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (checkDuplicate(itemInput)) {
            listArr.push(itemInput.value);
            renderList();
        }
    }
});
