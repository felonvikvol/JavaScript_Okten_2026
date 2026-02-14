
let array=[10,8,-7,55,987,-1011,0,1050,0];


console.log("Маємо масив");
console.log(array);
dir_1="ascending"
dir_2="descending"

let sortNums=(array,direction)=>{
    if (direction==="ascending") array=array.sort((a,b)=> a-b);
    else array=array.sort((a,b)=> b-a);

    return array;
}

console.log("Відсортований масив");
console.log(sortNums(array,dir_1));


