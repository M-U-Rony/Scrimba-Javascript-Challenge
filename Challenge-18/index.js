import shoppingCartData from "./data.js";


function calculateCost(arr){

    let price =0;

    for(const item of arr){
        if(item.isGift){
            price+= item.price;
        }
    }

    return price.toFixed(2);
}

console.log(calculateCost(shoppingCartData)) //559.93 

