// let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];
// myTxt="Glory to Ukraine!!"
// count=4

let userInput = [
    {
        id: 1,
        name: "Віктор",
        age: 44
    },
    {
        id: 2,
        name: "Світлана",
        age: 35
    }
];

let users = arr => {
    for (let user of arr) {
        document.writeln(`
            <div style="color: blue; 
                        font-size: 36pt;
                        width: 30%; 
                        border: solid;
                        margin-top: 50px;
                        "> id: ${user.id}, name: ${user.name}, age: ${user.age} </div>
        `);
    }
};
// document.writeln(`
//        <ul>
// `);

users(userInput)

// document.writeln(`
//        </ul>
// `);

// arr.forEach(elit =>{
//     console.log(elit);
// });

