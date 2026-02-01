// let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];

myTxt="Glory to Ukraine!!"

let text = txt =>{
    for (let i = 0; i <3; i++) {
        document.writeln(`
            <li style="color: blue; font-size: 24pt;"> ${txt} </li>
        `);
    }
}
document.writeln(`
       <ul>
`);

text(myTxt)

document.writeln(`
       </ul>
`);

// arr.forEach(elit =>{
//     console.log(elit);
// });

