function randomInt(numb) {
    return Math.floor(Math.random() * numb);
}
x=7;
p=randomInt(x)+1;

switch(p){
    case 1: console.log(p,"Monday"); break;
    case 2: console.log(p,"Tuesday"); break;
    case 3: console.log(p,"Wednesday"); break;
    case 4: console.log(p,"Thursday"); break;
    case 5: console.log(p,"Friday"); break;
    case 6: console.log(p,"Saturday"); break;
    case 7: console.log(p,"Sunday"); break;
    default: console.log(p,"Enter Error"); break;
}
