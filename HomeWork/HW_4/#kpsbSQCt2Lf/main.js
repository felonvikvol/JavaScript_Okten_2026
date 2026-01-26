function swap(arr,index1,index2) {
    let tmp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=tmp;

    return arr;

}

let array = [1,2,3,4,5,6,7,8,9,10];
let index1 = 0;
let index2 = 2;

document.writeln(`
<h1>Заданий масив [${array}]</h1>
<h2>Заміна елементів з номерами ${index1} та ${index2}</h2>
<h1>Результуючий масив [${swap(array,index1,index2)}]</h1>
`);




