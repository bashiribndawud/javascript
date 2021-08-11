function car(name, brand, color, year, plateno){
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.plateno = plateno;
    
}

car.prototype.getFullDetail = function() {
    return `${this.name} is of brand ${this.brand}, 
    created in ${this.year} color ${this.color}`
}

const myCar = new car('benz', 'Chasis', 'black', '2020', 'dgJ123-ABUJA')
// console.log(myCar.getFullDetail());

// inheritance
function truck(name, brand, color, year, plateno, month) {
    // inherit properties of parent constrcutor car.bind(this, name...)
    car.call(this, name, brand, color, year, plateno);

    this.month = month;
}

truck.prototype = Object.create(car.prototype); 

const truck1 = new truck('dangote truck', 'Chasis', 'brown', '2012', 'Kano_GHJ', 'Jan');
// use truck constrcutor
truck.prototype.constructor = truck;
console.log(truck1)

