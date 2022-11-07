export class Vehicule {

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
