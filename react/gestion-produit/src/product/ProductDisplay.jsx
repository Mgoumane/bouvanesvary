import React from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default class ProductDisplay extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showFrom : false,
            products : []
        };
        this.handleShowFormBtn = this.handleShowFormBtn.bind(this);
    };
    // componentDidMount(){
    //     fetch("http://localhost:3000/data.json").then((res) => {
    //         return res.json();
    //     }).then((tab) => {
    //         this.setState({
    //             products : tab
    //         })
    //     }) 
    // };
    componentDidMount = async () => {
        const res = await fetch("http://localhost:3000/data.json");
        const tab = await res.json();
        this.setState({
            products: tab
        })
    }
    handleShowFormBtn=function (){
        this.setState((prevState) => {
            return {
                showFrom: !prevState.showFrom
            }
        });
    };
    deleteProduct = (id) => {
        this.setState((prevState)=> {
            return {
                products : prevState.products.filter((prod) => {
                   return prod.id !== id
                })
            }
        })
    }
    render(){
        return (
            <>
                <h1>Gestion de produits</h1>
                <button onClick={this.handleShowFormBtn}>
                    {this.state.showFrom ? "Afficher la liste" : "Ajouter un produit"}
                </button>
                {
                    this.state.showFrom ? 
                    <ProductForm/> 
                    : 
                    <ProductTable 
                    products={this.state.products}
                    deleteProduct={this.deleteProduct}
                    />
                }
                
            </>  
        )
    }
}