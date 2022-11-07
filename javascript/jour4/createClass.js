class Vehicule {

    constructor(id,marque,couleur ) {
    this.id = id;
    this.marque = marque;
    this.couleur = couleur;
    };

    avancer() {
        console.log("avancer");
    }
    freiner() {
        console.log("freiner");
    }
    toString() {
        return `id: ${this.id} marque: ${this.marque} couleur: ${this.couleur}`
    }

};

let v1 = new Vehicule(1,"Audi", "jaune");
let v2 = new Vehicule(2,"Peugeot", "noir");
let monToString = v1.toString();

let obj = {
    id:1000,
    marque: "toto",
    couleur:"bleu"
};

console.log(
    v1.toString(),
    v2.toString(),
    monToString.apply(obj)
);

