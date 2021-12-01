// PART ONE
//Create a class for vehicle. Each vehicle instance should have the following properties: make, model, year

//Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

//Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}