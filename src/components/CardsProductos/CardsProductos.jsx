import { CartCheckFill, Cart, } from "react-bootstrap-icons";
import { useState } from "react";
import { useContext } from "react";
import { TecnoContext } from "../../Store/appContext";
import { useLocation, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const CardsProductos = (props) => {
  const { producto } = props;
  const [statusAgregado, setStatusAgregado] = useState(false);
   const {addProduct, deleteCarrito,deleteAdmin} = useContext(TecnoContext)
   let location = useLocation()


return (
    <>
      <Toaster/>
      <div className="card col-sm-12 col-md-4 col-lg-3  ms-5 mt-4 mb-5 me-5 cardstyle" style={{ width: "18rem", height: "400px" }}>
        <img
          src={require(`../../img/${producto.nombre}.jpg`)}
          className="card-img-top h-50"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">${producto.precio}</p>
          <div className="d-flex justify-content-around mt-4">
          {location.pathname === "/" || location.pathname === "notebooks" || location.pathname === "celulares" || location.pathname === "tablets" ?
           <button onClick={() => addProduct({...producto})}
           className= "btn"><Cart />
            </button>
            : location.pathname === "/carrito"? 
            <button className="btn" onClick={() =>deleteCarrito(producto.id) }> <i class="bi bi-trash2"></i></button>
            :<button className="btn" onClick={() =>deleteAdmin(producto.id) }> <i class="bi bi-trash2"></i></button>
        }
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsProductos;








