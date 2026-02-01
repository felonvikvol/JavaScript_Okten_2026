let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];

// myTxt="Glory to Ukraine!!"
// count=4

let array = arr =>{
    for (let i = 0; i <arr.length; i++) {
        document.writeln(`
            <li style="color: blue; font-size: 24pt;"> ${arr[i]} </li>
        `);
    }
};
document.writeln(`
       <ul>
`);

array(arr)

document.writeln(`
       </ul>
`);

// arr.forEach(elit =>{
//     console.log(elit);
// });

