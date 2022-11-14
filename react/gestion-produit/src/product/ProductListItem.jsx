export default function ProductListItem(props){
    const prod = props.product;
  
    return (
        <tr>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>
                <button 
                onClick={() => {props.deleteProduct(prod.id)}}
                >Supprimer</button>
                <button>Modifier</button>
            </td>
        </tr>
    ) 
    
}