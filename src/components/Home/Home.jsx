import { useContext } from 'react';
import { TecnoContext } from '../../Store/appContext';
import './Home.css'



const Home = () => {
    const {productos, setProductos} = useContext(TecnoContext)
    
    return ( 
        <>
        <h2>Home</h2>
        {console.log(productos)}
        </>
     );
}
 
export default Home;