function printArray(array) {
    for (let arr of array) {
        document.writeln(`
            <li style="list-style-type: none;">${arr}</li>
                            `);
                            }
}

let array = [1, 2, 3,'asd',"fgh",[4.6,7.89]];

document.writeln(`
<h2>
<ul>
`);

printArray(array);

document.writeln(`
</ul>
</h2>
`);