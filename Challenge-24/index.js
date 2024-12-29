import { codedMessage } from './codedMessage.js'

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/ 


function convertASCII (){

    let converted = [];
    let decimalValue = [];

    codedMessage.forEach((code) =>{
        
        if(code === '101010' || code === '101011'){
            decimalValue.push(' ');
        }
        
        else{
         decimalValue.push(parseInt(code, 2));
        }
    })
    
    
    decimalValue.forEach((dec)=>{

        if(dec === ' ') { 
            
            converted.push(dec);
        }

        
        else if( dec <= 36){ 
            
            converted.push(String.fromCharCode(dec + 86));
        }
        
        
        else converted.push(String.fromCharCode(dec - 10));
    })

   
   return converted.join('');
    
}


console.log(convertASCII());



