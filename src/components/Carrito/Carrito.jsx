import { useContext } from 'react';
import { TecnoContext } from '../../Store/appContext';
import CardsProductos from '../CardsProductos';
import './Carrito.css'

const Carrito = () => {
    const {wishlist, setWishlist} = useContext(TecnoContext)
    
    
   
    
    return ( 
        <main>
            <div className='container-row'>
                {wishlist.length === 0 ? <h2 className='text-center mt-5'>No hay productos</h2>
                :
                wishlist.map((wish) => (
                        <CardsProductos key={wish.id} producto={{...wish}} ></CardsProductos>
                ))
}


            </div>
        </main>
     );
}
 
export default Carrito;