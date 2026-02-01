// let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];
// myTxt="Glory to Ukraine!!"
// count=4

let arrData=[1,-34,5.6,-5];


let users = arr => {
    min=arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<min) min=arr[i];
    }
    return min;
};

min=users(arrData)

document.writeln(`
       <h1>Для масиву ${arrData}</h1>
       <h1>мінімальним є елемент ${min}</h1>
`);

// arr.forEach(elit =>{
//     console.log(elit);
// });

