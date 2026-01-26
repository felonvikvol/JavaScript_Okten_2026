function minElemet(array) {
    mn=array[0]
    for (let i=1; i<array.length; i++) {
        if (array[i]<mn) {
            mn=array[i]
        }
    }

    return mn;

}

let array = [5,-12,5,89,-35,7];

document.writeln(`
<h1>Для масиву ${array}</h1>
<h1>мінімальним є елемент ${minElemet(array)}</h1>
`);




