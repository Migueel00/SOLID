// Liskov Substitution Principle
// The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
// In other words, if class B is a subclass of class A, then we should be able to replace A with B without altering the desirable properties of the program (correctness, task performed, etc.).
// Incorrect implementation of LSP

class Bird{
  public fly(): string {
    return "Fly"
  }
}

class Chicken extends Bird{
  public fly(): string {
    // throw new Error("Chickens can't fly");
    return "Chickens can't fly";
  }
}

const bird = new Bird();
const chicken = new Chicken();
console.log(bird.fly()); // Fly
console.log(chicken.fly()); // Error: Chickens can't fly

// The Chicken class violates the Liskov Substitution Principle because it cannot be used as a substitute for the Bird class without causing an error.

// Correct implementation of LSP
class Vehicle{
  public speed : number;

  constructor(speed : number){
    this.speed = speed;
  }

  public accelerate(increment: number) : void{
    this.speed += increment;
    console.log(`Accelerating to ${this.speed}`);
  }

  public brake(decrement: number) : void{
    this.speed -= decrement;
    console.log(`Braking to ${this.speed}`);
  }
}

class Car extends Vehicle{
  public accelerate(increment: number) : void {
    console.log("Car is accelerating");
    super.accelerate(increment);
  }

  public brake(decrement: number): void {
    console.log("Car is braking");
    super.brake(decrement);
  }
}

class Bicycle extends Vehicle{
  public accelerate(increment: number): void {
    console.log("Bicycle is accelerating");
    super.accelerate(increment);
  }

  public brake(decrement: number): void {
    console.log("Bicycle is braking");
    super.brake(decrement);
  }
}

class Motorcycle extends Vehicle{
  public accelerate(increment: number): void {
    console.log("Motorcycle is accelerating");
    super.accelerate(increment);
  }

  public brake(decrement : number): void {
    console.log("Motorcycle is braking");
    super.brake(decrement);
  }
}


const car = new Car(0);
const bicycle = new Bicycle(0);
const motorcycle = new Motorcycle(0); 

const test_vehicles = (vehicle: Vehicle) => {
  vehicle.accelerate(2);
  vehicle.brake(3);
}

test_vehicles(car);
test_vehicles(bicycle);
test_vehicles(motorcycle);
// The Vehicle class and its subclasses (Car, Bicycle, Motorcycle) adhere to the Liskov Substitution Principle.

