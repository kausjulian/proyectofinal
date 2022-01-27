import { useContext } from 'react';
import { TecnoContext } from '../../Store/appContext';
import CardsProductos from '../CardsProductos';
import './Carrito.css'

const Carrito = () => {
    const {wishlist, setWishlist} = useContext(TecnoContext)
    
    
   
    
    return ( 
        <main>
            <div className='container-fluid  carrito'>
                <div className='row d-flex flex-wrap justify-content-between'>
                {wishlist.length === 0 ? <h2 className='text-center mt-5 mb-5 carrovacio'>No hay productos</h2>
                :
                wishlist.map((wish) => (
                        <CardsProductos key={wish.id} producto={{...wish}} ></CardsProductos>
                ))
}

                </div>
            </div>
        </main>
     );
}
 
export default Carrito;