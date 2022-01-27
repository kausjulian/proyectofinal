import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import CardsProductos from "../CardsProductos/CardsProductos.jsx";
import "./Home.css";

const Home = () => {
  const { productos, setProductos, userLoged } = useContext(TecnoContext);

  return (
        <div className="home">
                <Toaster/>
        <div className="">
          <h2 className="text-center titulo">Tecnogreen</h2>
          <div className="d-flex flex-wrap justify-content-between">
            {productos.map((producto) => (
              <CardsProductos key={producto.id} producto={{ ...producto }} />
            ))}
          </div>
        </div>
      )
    </div>
  );
};

export default Home;