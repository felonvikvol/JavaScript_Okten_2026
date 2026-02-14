function Car(mode, producer, year, maxSpeed, volume) {
    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function (){
        for (let car in this){
            console.log(car,this[car]);
        }
    }

    this.increaseMaxSpeed = function (newSpeed){
        if (newSpeed>0) this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue){
        if (newValue>0) this.year = newValue;
    }

    this.addDriver = function (driver){
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

console.log('*********')
console.log(car)


