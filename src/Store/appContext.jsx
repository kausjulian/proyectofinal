import { createContext, useState } from "react";

export const tecnoContext = createContext(null);

const TecnoProvider = ({ children }) => {
  const [productos, setProductos] = useState ([])
  const [wishlist, setWishlist] = useState ([])

  
  return (
    <Context.Provider value={{  }}>
      {children}
    </Context.Provider>
  );
};

export default TecnoProvider;