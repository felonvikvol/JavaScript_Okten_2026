// let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];

myTxt="Glory to Ukraine!!"
count=4

let text = ((txt,count) =>{
    for (let i = 0; i <count; i++) {
        document.writeln(`
            <li style="color: blue; font-size: 24pt;"> ${txt} </li>
        `);
    }
});
document.writeln(`
       <ul>
`);

text(myTxt,count)

document.writeln(`
       </ul>
`);

// arr.forEach(elit =>{
//     console.log(elit);
// });

