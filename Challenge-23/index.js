
const santasArr = ['James', 'Yi', 'Grinch', 'Fatima', 'Tariq', 'Grinch', 'Clare', 'Grinch']

const missingNamesArr = ['Florinda', 'Jose', 'Gibbs']

let missingNamesArrIndex=0;

santasArr.forEach((name,index) =>{
    if(name === 'Grinch'){
        santasArr[index] = missingNamesArr[missingNamesArrIndex];
        missingNamesArrIndex++;
    }
})

 

// Expected Output: ['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']