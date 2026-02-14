class Cinderella{

    constructor (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{

    constructor (name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}


let cinderellas = [
    new Cinderella('Cinderella-1',34,40),
    new Cinderella('Cinderella-2',14,41),
    new Cinderella('Cinderella-3',24,38),
    new Cinderella('Cinderella-4',17,36),
    new Cinderella('Cinderella-5',13,40),
    new Cinderella('Cinderella-6',43,39),
    new Cinderella('Cinderella-7',31,37),
    new Cinderella('Cinderella-8',41,35),
    new Cinderella('Cinderella-9',18,39),
    new Cinderella('Cinderella-10',22,40),
];

console.log('Всі Попелюшки:')
console.log(cinderellas)

let prince = new Prince('Prince',30,36)

console.log('Шукана Попелюшка_Цикл:')
for (let wife of cinderellas){
    if (wife.footSize===prince.slipper) {
        console.log(wife);
        break;
    }

}
// console.log(wife)


console.log('Шукана Попелюшка_find:')
let wife = cinderellas.find(c => c.footSize === prince.slipper);
console.log(wife)