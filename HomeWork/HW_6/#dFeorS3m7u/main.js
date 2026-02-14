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

let myStrings=['hello world','lorem ipsum','javascript is cool'];

for (let txt of myStrings){
    document.writeln(`
        <h1>Кількість символів тексту "${txt}" рівна ${txt.length}</h1>
    `)
}