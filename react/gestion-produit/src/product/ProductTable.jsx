import ProductListItem from "./ProductListItem"

export default function ProductTable(props){
    return(
        <>
            <h2>Liste des produits</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map( (prod) => {
                        return (
                            <ProductListItem   
                                key={prod.id.toString()}
                                product={prod}
                                deleteProduct={props.deleteProduct}
                            />
                        )
                    })}   
                </tbody> 
            </table>
        </>
    )
};