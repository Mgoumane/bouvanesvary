class Car {
    constructor(make) {
    this.make=make;
    this.id=Car.id++;
    }
}
    Car.id = 0;
    let c1 = new Car('Peugeot');
    let c2 = new Car('Renault');
    c1.id; // 0
    c2.id; // 1
    