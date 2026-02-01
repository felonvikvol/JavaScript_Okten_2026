// let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];
// myTxt="Glory to Ukraine!!"
// count=4

let arrData=[1,-3,5,-5];


// let users = arr => {
//     min=arr[0];
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i]<min) min=arr[i];
//     }
//     return min;
// };

let sumArray = arr => arr.reduce((sum, el) => sum + el, 0);

document.writeln(`
       <h1>Для масиву ${arrData}</h1>
       <h1>сума елементів = ${sumArray(arrData)}</h1>
`);



