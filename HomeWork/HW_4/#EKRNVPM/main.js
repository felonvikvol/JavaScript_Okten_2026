function sum(array) {
    s=0
    for (let i=0; i<array.length; i++) {
        s+=array[i];
    }

    return s;

}

let array = [5,-12,6,89,12,7,-89];

document.writeln(`
<h1>Сума ел-в масиву [${array}] = ${sum(array)}</h1>
`);




