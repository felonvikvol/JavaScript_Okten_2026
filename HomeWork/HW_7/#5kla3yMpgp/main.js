class Car{

    constructor (mode, producer, year, maxSpeed, volume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info(){
        for (let car in this){
            console.log(car,this[car]);
        }
    }

    increaseMaxSpeed(newSpeed){
        if (newSpeed>0) this.maxSpeed += newSpeed;
    }

    changeYear = function (newValue){
        if (newValue>0) this.year = newValue;
    }

    addDriver = function (driver){
        this.driver = driver;
    }
}

let car = new Car('mode','drive',2024,180,4);

console.log(car)
car.info()
car.drive()
car.increaseMaxSpeed(50)
car.changeYear(2024)
car.addDriver({name:  'Viktor', age: 45})

console.log(car)


