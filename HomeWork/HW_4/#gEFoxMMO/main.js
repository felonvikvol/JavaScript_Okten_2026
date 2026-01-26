function printArray(array) {
    for (let i=0; i < array.length; i++) {
        document.writeln(`
            <li style="font-size: 24pt; list-style-type: none;">${i} - ${array[i]}</li>
       `);
    }
}

// let str = "Glory To Ukraine!";
// let count = 5;
let array = [21, "Glory" ,25, 'Ukraine',3.2, false,true];
document.writeln(`<ul>`);

printArray(array);

document.writeln(`</ul>`);

