function randomInt(numb) {
    return Math.floor(Math.random() * numb);
}
x=59

let p=randomInt(x)+1;
if (p>-1 && p<15){
    console.log(p,'first');
}
else if (p>15 && p<31){
    console.log(p,'second');
}
if (p>30 && p<46){
    console.log(p,'third');
}
if (p>45 && p<60){
    console.log(p,'fourth');
}
