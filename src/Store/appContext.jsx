import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const TecnoContext = createContext(null);

const TecnoProvider = ({ children }) => {
  const [productos, setProductos] = useState ([
    {
    id: 1,
    tipo: "Celular",
    nombre: "iPhone 11",
    precio: 20000,
    descripcion: "El modelo básico del último celular de Apple es quizás el mejor que se ha fabricado. Aparte de la excelente cámara y los colores, el teléfono de Apple tiene la mejor batería hasta la fecha, que te durará todo el día trabajando. También es muy fino, algo que hace fácil llevarlo a cualquier sitio en el bolsillo de la chaqueta o tu bolsa de trabajo. El Apple iPhone 11 no recibirá una actualización hasta finales de este año, así que lo puedes comprar sin remordimientos.",
    },
    {
    id: 2,
    tipo: "Tablet",
    nombre: "Amazon Fire HD 8 (2020)",
    precio: 5000,
    descripcion: "Amazon Fire HD 8 (2020) posee una pantalla IPS HD de 8 pulgadas con resolución 1280x800 píxeles y 189 ppp. Cuenta con un filtro polarizador avanzado para cuidar la vista. El rendimiento aumenta un 30% gracias al nuevo procesador de cuatro núcleos a 2 GHz. La memoria también aumenta de 1,5 a 2 GB de RAM.",
    },
    {
    id: 3,
    tipo: "Laptop",
    nombre: "Thinkpad 5",
    precio: 150000,
    descripcion: "Muy buena compu",
    },
    {
        id: 4,
        tipo: "Celular",
        nombre: "Google Pixel 4",
        precio: 40000,
        descripcion: "Los Google Pixel se han convertido en el foco de la compañía de Mountain View. El Pixel 4 es el tope de gama que no se actualizará hasta Octubre de 2020. Tiene una nuevo diseño — sin “notch” — y una gran cámara. Cuenta con el sistema Android virgen, quizás la mejor opción disponible, y todas las aplicaciones de Google pre-instaladas, desde Docs hasta el Calendario. También ofrece las últimas actualizaciones de Android directamente desde Google y antes que nadie. La batería es su único punto negro pero, gracias a su precio, es uno de los celulares más atractivos en el mundo Androide.",
        },
        {
        id: 5,
        tipo: "Tablet",
        nombre: "Tablet Xiaomi 11 Mi Pad 5 6GB 128GB gris",
        precio: 87999,
        descripcion: "La tablet Xiaomi 11 Mi Pad 5 6GB 128GB posee una pantalla WQHD+ de 11' pulgadas - Resolución de pantalla 1600 x 2560 px - Resolución de video Dolby Vision® - Modelo del procesador Qualcomm® Snapdragon™ 860 - Cámara principal 13 MP - Cámara frontal 8 MP - Memoria RAM 6 GB - Memoria Interna 128 GB - Wi-Fi - Bluetooth 5.0 - Sistema operativo Android / 11, MIUI 12.5 - Puerto de carga USB-C.",
        },
        {
        id: 6,
        tipo: "Laptop",
        nombre: "HP Spectre x360",
        precio: 170000,
        descripcion: "El laptop 2-en-1 HP Spectre x360 ha tenido una gran actualización en 2020 y las mejore especificaciones técnicas — con procesadores Intel Core de 10ª generación  y nuevos gráficos Intel Iris Plus — además del impecable diseño 2-en-1 lo ha catapultado al número 1 de nuestra lista de los mejores portátiles. HP lleva una buena racha últimamente, con el excelente HP Elite Dragonfly también en esta lista, pero cuando se trata de calidad de construcción, diseño y rendimiento puro, el HP Spectre x360 (2020) es por ahora el mejor portátil que puedes comprar ahora mismo en 2020. Y aunque es cierto que cuesta muchos dólares, tiene unos extras excelentes de serie, como unas medidas de seguridad formidables y altavoces Bang & Olufsen. Si te importa la estética tanto como te importa la potencia y la calidad, el HP Spectre x360 (2020) es tu nuevo laptop.",
        },
        {
            id: 7,
            tipo: "Celular",
            nombre: "Samsung Galaxy Note 10 Plus",
            precio: 40000,
            descripcion: "El Galaxy Note 10 Plus es el celular más grande y potente de Samsung. Quizás es un modelo demasiado grande para el público en general pero lo hemos incluido en esta lista como la mejor elección para personas que puedan substituir su PC portátil y teléfono por una máquina única. Una pantalla gigante, un lápiz S Pen para poder tomar notas en cualquier momento, una batería enorme de 4300mAh, un procesador Snapdragon 855 y 12GB de RAM hacen de este modelo una máquina que puede dártelo casi todo.",
            },
            {
            id: 8,                
            tipo: "Tablet",
            nombre: "Samsung Tab S6 Lite",
            precio: 10000,
            descripcion: "La tablet  Galaxy Tab S6 es una de las mejores que hay ahora mismo en el mercado, pero está enfocada a los profesionales y tiene un precio elevado. Samsung lo sabe, y por eso ha lanzó en 2020 la nueva Galaxy Tab S6 Lite, una versión más ligera, pero ni mucho menos recortada en prestaciones. Incluso conserva el famoso S-Pen, el lápiz óptico de gran precisión, y uno de los mayores atractivos de esta tablet. Su diseño es casi idéntico al de su hermana mayor, aunque tiene algunos recortes, como la desaparición de lector de huellas y una de las cámaras traseras. Se queda con una cámara trasera de 8 MP y una delantera de 5 MP para hacer videollamadas. También tiene dos altavoces Dolby Atmos y AKG.",
            },
            {
            id: 9,
            tipo: "Laptop",
            nombre: "Dell XPS 13",
            precio: 150000,
            descripcion: "El Dell XPS 13 ha estado siempre en la parte de arriba de nuestras listas durante años y el modelo de 2019 se ha llevado la corona de la general. Un diseño excepcional y ligero, componentes potentes y una pantalla ‘Infinity Edge’ sin casi bordes han hecho del Dell XPS 13 el laptop Windows más popular. Dell ofrece personalización con un gran número de opciones, así que puedes adaptarlo exactamente a lo que necesites en la mayoría de las ocasiones.",
            },
            {
                id: 10,
                tipo: "Celular",
                nombre: "Samsung Galaxy S10 Plus",
                precio: 50000,
                descripcion: "Un muy buen celular",
                },
                {
                id: 11,
                tipo: "Tablet",
                nombre: "Lenovo Smart Tab",
                precio: 30000,
                descripcion: "Lenovo ha aprovechado esto para lanzar un nuevo concepto de tablet combinado con altavoz inteligente, que proporciona al usuario las ventajas de ambos dispositivos: reproducción de contenidos multimedia y juegos, reproducción de música con buena calidad de sonido, navegación por Internet y control de la Smart Home.",
                },
                {
                id: 12,
                tipo: "Laptop",
                nombre: "Huawei MateBook 13",
                precio: 150000,
                descripcion: "Huawei lo ha hecho otra vez y el Huawei MateBook X Pro de 2019 se ha convertido en uno de nuestros portátiles favoritos, con los potentes componentes  — como la tarjeta gráfica dedicada Nvidia MX150 — y el diseño de bajo peso que esperarías de un laptop de gama alta pero con precios asequibles. Es increíble lo mucho que ofrece el MateBook 13 por un precio tan barato, sobre todo comparándolo contra los Ultrabook de la competencia. Esto lo convierte en el mejor valor de nuestra lista aunque no tenga puertos Thunderbolt 3 o una pantalla de 4K como el Dell XPS 13 o el MacBook Pro. Aunque el gobierno americano tiene un embargo en Huawei, tanto Microsoft como Intel han anunciado que seguirán dando soporte a los portátiles de la compañía china, lo que significa que el MateBook 13 y otros modelos seguirán siendo actualizados con nuevas versiones de Windows.",
                },
                {
                    id: 13,
                    tipo: "Celular",
                    nombre: "OnePlus 7T",
                    precio: 90000,
                    descripcion: "Si estás buscando un celular para trabajar y disfrutar que sea fiable y sólido, el OnePlus es una opción excelente y el OnePlus 7T es uno de sus mejores modelos a un precio justo y asequible — de los más asequibles que hay en el mercado para toda su funcionalidad. El interfaz de usuario es excelente, suave como la mantequilla caliente gracias a un refresco de pantalla de 90Hz. La batería de 3,800mAh es excelente. El OnePlus 7T salió en octubre de 2019, así que todavía tienes casi un año por delante hasta que salga el 8T.",
                    },
                    {
                    id: 14,
                    tipo: "Tablet",
                    nombre: "Lenovo Yoga Smart Tab",
                    precio: 100000,
                    descripcion: "Posee unos enormes altavoces duales JBL Hi-Fi que no solo son fantásticos para escuchar música o ver series, sino que además actúan como base para dejar la tablet apoyada en una mesa. Y dan mucho juego, porque permiten apoyar la tablet tanto en vertical como en horizontal.",
                    },
                    {
                    id: 15,
                    tipo: "Laptop",
                    nombre: "MacBook Pro (16-inch, 2019)",
                    precio: 200000,
                    descripcion: "El MacBook Pro 15 ha muerto y en buena hora porque ese teclado era un infierno de problema. El MacBook Pro (16-inch, 2019) lo soluciona y además es tan fino y tiene el mismo tamaño que el de 15 pulgadas... excepto que han aumentado el tamaño de la pantalla — realmente excelente, por cierto — a 16 pulgadas gracias a los marcos muy reducidos. Puntos extra: el sonido es francamente bueno.",
                    }
])
const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) !== null ? JSON.parse(localStorage.getItem("wishlist")):
  [])

    // creamos un array de objetos con los datos de usuarios preexistentes
    const [users, setUsers] = useState([ {name: "admin",
    password: "admin"
    },
    {
        name:"greelow",
        password: "greelow"
    },
    {
      name:"pdtc",
      password: "pdtc"
    }])
     
  
    //datos ingresados poe el usuario
  const [userName, setUserName] = useState('')
  const [userPassword, setPassword] = useState('')

  //usuario logeado
const [userLoged, setUserLoged] = useState("")

//funcion para agregar a wishlist  

const addProduct = product =>{
      const error = wishlist.find(wish =>wish.id === product.id)
      if (error) return toast.error("Este producto ya esta en tus Deseados")
      setWishlist([product,...wishlist])
      toast.success("Agregado a Deseados")
      
  }

  //funcion para eliminar del carrito
const deleteCarrito = (id) =>{
  setWishlist(wishlist.filter(wish=>wish.id != id))
  toast.success("Producto eliminado con éxito")
  }

//funcion para eliminar productos admin

const deleteAdmin = (id) =>{
  setProductos(productos.filter(producto=>producto.id != id))
  
}

///delete users admin
const deleteUsers = (name) =>{
  setUsers(users.filter(user=>user.name!=name))
  toast.success("Usuario eliminado con éxito")
  console.log(users)
}


//guardamos en el ls los deseados del usuario
useEffect(()=>{
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}, [wishlist])

return (
    <TecnoContext.Provider value={{ productos, setProductos, wishlist, setWishlist,addProduct,users,setUsers,userName,setUserName,userPassword,setPassword,userLoged,setUserLoged,deleteCarrito,deleteAdmin,deleteUsers }}>
      {children}
    </TecnoContext.Provider>
  );
};

export default TecnoProvider;