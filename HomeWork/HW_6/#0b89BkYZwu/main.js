// let txt="Glory to Ukraine!!";
//
// let array=[
//     {
//         id: 1,
//         name: "Name_1",
//         age: 20,
//         status: true
//     },
//     {
//         id: 2,
//         name: "Name_2",
//         age: 30,
//         status: false
//     }
// ]

// let myStrings=['hello world','lorem ipsum','javascript is cool'];
// let myStringsUpper=['HELLO WORLD','LOREM IPSUM','JAVASCRIPT IS COOL'];

let txt="    Glory    to    Ukraine!!  ";
console.log("Брудний рядок");
console.log(txt);

let cleanString=txt=>{
    txt=txt.trim()
    while (txt.includes("  "))
        txt=txt.replaceAll("  "," ")
    return txt;
}

console.log("Чистий рядок");
console.log(cleanString(txt));


