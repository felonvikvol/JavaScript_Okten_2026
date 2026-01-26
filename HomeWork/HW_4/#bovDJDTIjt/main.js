function printArray(array) {
    for (let arr of array) {
        document.writeln(`
            <div style="font-size: 24pt; border: solid; margin-top: 10px; width: 500px;">
                id: ${arr.id}
                name: ${arr.name}
                age: ${arr.age}
            </div>
       `);
    }
}

let array = [
    {
        id:1,
        name: 'Viktor',
        age: 44
    },
    {
        id:2,
        name: 'Switlana',
        age: 45
    }

];


printArray(array);



