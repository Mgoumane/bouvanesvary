import React, { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";


export default function ProductDisplay(props){
    // State
    const [showForm, setShowForm] = useState(false);
    // Appel de useFetch
    const {data : products, setData : setProducts , error, status} = useFetch("http://localhost:3000/data.json");

    
    // ComponentDidMount

    // useEffect(() => {
    //     fetch("http://localhost:3000/data.json").then((res) => {
    //         return res.json();
    //     }).then((tab) => {
    //         // this.setState({
    //         //     products : tab
    //         // })
    //         setProducts(tab);
    //     }) 
    //     // componentWillUnmount
    //     // return () => {
    //     //     cleanup
    //     // };
    // }, []);

   // useEffect(() => {
    //     const monFetch = async () => {
    //         const res = await fetch("http://localhost:3000/data.json");
    //         const tab = await res.json();
    //         setProducts(tab)
    //     }
    //     monFetch();
    // }, []);//tableau de dépendance

    const handleShowFormBtn=function (){
        // this.setState((prevState) => {
        //     return {
        //         showForm: !prevState.showForm
        //     }
        // });
        setShowForm(( oldShowForm ) => {
            setShowForm(!oldShowForm);
        })
    };
    const deleteProduct = (id) => {
        // this.setState((prevState)=> {
        //     return {
        //         products : prevState.products.filter((prod) => {
        //            return prod.id !== id
        //         })
        //     }
        // })
        setProducts(( oldProducts ) => {
            setProducts(!oldProducts.filter((prod) => prod.id !== id));
        })
    }
    const addProduct = (product) => {
        setProducts((oldProducts) => {
            setProducts(oldProducts.concat(product))
        })
    }
    if (status === "error") {

        return <p>Echec de récupération de données : {error}</p>

    } else if (status === "loading") {

        return <p>En cours de chargement</p>

    } else if (status === "success") {

        return (
            <>
                <h1>Gestion de produits</h1>
                <button onClick={handleShowFormBtn}>
                    {showForm ? "Afficher la liste" : "Ajouter un produit"}
                </button>
                {
                    showForm ? 
                    <ProductForm
                    addProduct={addProduct}
                    /> 
                    : 
                    <ProductTable 
                    products={products}
                    deleteProduct={deleteProduct}
                    />
                }
            </>  
        )
    }
    


}