// let arr=[1,-34,5.6,'Glory',"to Ukraine",true,false];
// myTxt="Glory to Ukraine!!"
// count=4

let arrData=[1,-3,5,-7.2];
ind_1=1
ind_2=3

let swap = ((arr,ind_1,ind_2) => {
    [arr[ind_1],arr[ind_2]]=[arr[ind_2],arr[ind_1]]
    // let tmp=arr[ind_1];
    // arr[ind_1]=arr[ind_2];
    // arr[ind_2]=tmp;
    return arr;
});

document.writeln(`
       <h1>Для масиву ${arrData}</h1>       
`);

let arrRez=swap(arrData,ind_1,ind_2);

document.writeln(`
       <h1>заміна елементів з індексами ${ind_1} та ${ind_2}</h1>
       <h1>отримаємо масив ${arrRez}</h1>
`);



