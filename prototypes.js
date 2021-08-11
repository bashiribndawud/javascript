function car(name, brand, color, year, plateno){
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.year = year;
    // this.plateno = plateno;
    
}

car.prototype.carInfo = function(){
    return `this car name is ${this.name}`
}
car.prototype.plateno = 'HD1-Abuja';




const firstCar = new car('benz', 'H2020', 'white', '2011');
// get Age
car.prototype.getAge = function() {
    const year1 = new Date().getFullYear() - this.year;
    return `${this.name} is ${year1} old`
}
console.log(firstCar.getAge())

// change tear
car.prototype.revise = function() {
    this.year = newYear;
    this.revised = true;
}
