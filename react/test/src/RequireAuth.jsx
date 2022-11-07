/**
 * 
 * @param {{isAuthenticated, children}} props 
 * @returns 
 */
 export default function RequireAuth(props){
    console.log()
    if (props.isAuthenticated) {
        return props.children;
    }
    return <p>Login</p>;
}