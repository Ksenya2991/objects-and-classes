class Automobile {

    constructor( brand = 'empty', model = 'empty', year = 'empty', speed = 'empty') {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    increaseSpeed() {
        return this.speed * 2;
    }

    reduceSpeed() {
        return this.speed / 2;
    }
}

const carOne = new Automobile('Chevrolet', 'Malibu', 2018, 218 );
const carTwo = new Automobile('BMW','X7', 2019, 227);

console.group('Results')
console.log('First car', carOne);
console.log('Second car', carTwo);
console.log('First car speed is', carOne.increaseSpeed());
console.log('Second car speed is', carTwo.increaseSpeed());
console.log('First car speed is', carOne.reduceSpeed());
console.log('Second car speed is', carTwo.reduceSpeed());



const house = {
    address: 'none',
    floorsNumber: 0,
    roomsNumber: 0,
    facadeColor: 'none',

    addRooms() {
        return `house has ${this.roomsNumber + 1} rooms`
    },

    get newColor(){
        return `${this.facadeColor}`
    },

    set newColor(value){
        [this.facadeColor] = value.split(' ');
    }
}

const houseOne = Object.create(house);
houseOne.address = 'Astana';
houseOne.floorsNumber = 3;
houseOne.roomsNumber = 24;
houseOne.facadeColor = 'white';
houseOne.newColor = 'green'


const houseTwo = Object.create(house);
houseTwo.address = 'Almaty';
houseTwo.floorsNumber = 8;
houseTwo.roomsNumber = 65;
houseTwo.facadeColor = 'gray';
houseTwo.newColor = 'blue';


console.log('Fist house', houseOne);
console.log('Second house', houseTwo);
console.log('Fist', houseOne.addRooms());
console.log('Second', houseTwo.addRooms());








