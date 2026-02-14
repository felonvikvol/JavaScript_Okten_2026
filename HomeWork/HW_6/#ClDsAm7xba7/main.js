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
let myStringsUpper=['HELLO WORLD','LOREM IPSUM','JAVASCRIPT IS COOL'];

for (let txt of myStringsUpper) {

    document.writeln(`
        <h1>Маємо текст "${txt}": текст переведений: "${txt.toLowerCase()}"</h1>
    `)
}