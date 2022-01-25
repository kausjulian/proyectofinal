import { useContext } from 'react';
import { TecnoContext } from '../../Store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {wishlist, setWishlist} = useContext(TecnoContext)
    
    
   
    
    return ( 
        <h4>Carrito</h4>
     );
}
 
export default Carrito;