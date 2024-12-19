
function correctChangeFromSanta(bills) {

    let five=0,ten=0,twwnty=0,flag=0;

    for(const element of bills){

        if(element===20){
            if(ten>0 && five>0){
                ten--;
                five--;
                twwnty++;
            }
            else if(five>2){
                five-=3;
                twwnty++;
            }
            else{
                return false;
            }
        }

        else if(element===10){
            if(five>0){
                five--;
                ten++;
            }
    
            else{
                return false
            }
        }

        else{
            five++;
        }
    };

    return true;


    
}

// You can leave this code as is, this will simply console.log() different text depending on if the test case returns true or false. Feel free to add additional test cases if you would like!

// Should return true
if (correctChangeFromSanta([5,5,5,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}

// Should return false
if (correctChangeFromSanta([5,5,10,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}
