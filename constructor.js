// constrcutor
function car(name, brand, color, year, plateno){
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.plateno = plateno;
    this.carInfo = function(){
        return `this car name is ${this.name}`
    }
}

const firstCar = new car('benz', 'H2020', 'white', '2020', 'HD1-Abuja');
console.log(firstCar.carInfo())