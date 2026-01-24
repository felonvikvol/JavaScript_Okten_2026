function randomInt(numb) {
    return Math.floor(Math.random() * numb);
}
maxNumb=100;
numb1=randomInt(maxNumb)+1;
numb2=randomInt(maxNumb)+1;

console.log(`for numbers ${numb1} and ${numb2}:`);
if (numb1 < numb2){
    console.log(`Max = ${numb2}`);
}
else if (numb1 > numb2){
    console.log(`Max = ${numb1}`);
}
else console.log(`The numbers are equal`);


