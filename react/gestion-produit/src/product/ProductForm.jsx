import React, { useState } from "react";

export default function ProductForm(props){
    const [id, setId] = useState(1);
    const [name, setName] = useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        switch (event.target) {
            case "id":
                setId(value)
                break;
            case "name":
                setName(value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        // Empecher l'action par défault du navigateur
        event.preventDefault();
        // Faire la validation 
        
        // Ajouter le produit 
        const product ={
            id : id,
            name : name
        }
        props.addProduct(product)
    }
    return (
        <>
            <h1>Formulaire</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label" value={id}>Id</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        name="id"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" value={name}>Nom de produit</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <input type="submit" className="btn btn-primary" ></input>
            </form>
        </>
    )
}