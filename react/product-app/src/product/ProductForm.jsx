import React, { useState } from "react";

export default function ProductForm(props) {

    //const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [erreur, setErreur] = useState("");
    const [erreur2, setErreur2] = useState("");
  
    

    const handleChange = (event) => {
        const value = event.target.value
        switch (event.target.name) {
            case "name":
                console.log("name");
                let tab = ['@','$', '&','%'];
                
                if (value.length < 2 && value.length>0 || value.indexOf("@") !== -1) {
                    setName(value);
                    setErreur2("Erreur de saisie");

                }else{
                    setName(value);
                    setErreur2("");
                }
            case "price":
                console.log("price");
                if (value < 0) {
                    setPrice(value);
                    setErreur("Prix invalide");

                }else{
                    setPrice(value);
                    setErreur("");
                }
                break;
            default:
                break;
        }
    }
    const handleSubmit = (event) => {
        //empecher l'action par défaut de navigateur
        event.preventDefault();

        //faire la validation
        //ajouter le produit
        const product = {
            name: name,
            price: price
        }
        //requete AJAX vers le backend

        // const product = {
        //     id,
        //     name
        // }
        props.addProduct(product)
        // props.addProduct({id, name})
    }
    return (
        <>
            <h1>Formulaire d'ajout de produit</h1>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="name">Nom de produit</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    onChange={handleChange}
                />
                <div>{erreur2}</div>
                <label htmlFor="price">Prix</label>
                <input
                    type="number"
                    name="price"
                    value={price}
                    id="price"
                    step= {0.01}
                    onChange={handleChange}
                />
                <div>{erreur}</div>

                <input type="submit" value="Ajouter Produit" />
                {/* <input type="submit" value="Ajouter Produit" onClick={handleSubmit}/> */}
            </form>
        </>

    )
}