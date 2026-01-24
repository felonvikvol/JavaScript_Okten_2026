function randomInt(numb) {
    return Math.floor(Math.random() * numb);
}
x=31;
p=randomInt(x)+1;

if(p<11){
    console.log(p,'first');
}
if(p>10 && p<21){
    console.log(p,'second');
}
if(p>20 && p<32){
    console.log(p,'third');
}
