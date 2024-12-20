import shoppingList from "./shoppingList.js";

function sortProducts(list){

  list.sort((a, b) => a.price - b.price);

  return list;
    
}

const listByCheapest = sortProducts(shoppingList);

listByCheapest.forEach(element=>{

    console.log(element.product+': '+'$'+element.price);

})




 