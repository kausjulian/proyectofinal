import './Login.css'
import { useContext, useEffect, useState } from "react";
import { TecnoContext } from '../../Store/appContext';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  ///importacion del context
  const {users,userName, setUserName, password, setPassword,setUserLoged} = useContext(TecnoContext)
  
  const [error, setError] = useState(false);
  
  console.log(password);
///variable para redireccionar
  let navigate = useNavigate()

  const validacion = (e) => {
    e.preventDefault()
    for (let i = 0; i < users.length; i++) {
    if(userName == users[i].name && password==users[i].password){
        setUserLoged(`User: ${users[i].name} Pass: ${users[i].password}`)
        // toast.success("Bienvenido a TecnoGreen!")
        navigate('/usuario')
        console.log("login user ok")
    }
   
    else 
        setError(true);
    
  }}

 
  

  return (
    <div className="align-items-center border cuerpologin">
      <form className="container align-items-center larger shadow formingreso mb-5 mt-3">
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label mt-2">
            Usuario
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setUserName(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos tus datos.
          </div>
        </div>
         <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Contraseña
                </label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
            <button onClick={(e) => validacion(e)} className="btn btn-secondary mb-3 mt-1 boton">
            Ingresar
            </button>
        <h6 className={error ? "text-danger" : "d-none"}>
          Los datos ingresados no son válidos. 
        </h6>
        <div className='d-flex'>
          <p>No tenes usuario?</p>
          <Link to={'./register'} > 
          <p className='ms-4'>Registrate</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;


// let navigate = useNavigate()
//   const validacion = () => {
//     for (let i = 0; i < users.length; i++) {
//     if(userName == users[i].name && password==users[i].password){
//       setUserLoged(`User: ${users[i].name} Pass: ${users[i].password}`)
//       navigate('/') //ReactRuterdom useNavigate
//     } else{
//         setError(true);
//     }
//   };
//   }















