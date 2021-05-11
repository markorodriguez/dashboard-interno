import React, { useState } from "react";
import PropTypes from "prop-types";
import  Axios  from "axios";

export default function Login ({setToken})  {

   const [usuario, setUsuario] = useState("")
   const [contraseña, setContraseña] = useState("")

   const submitHandler = (e) => {
      e.preventDefault();
      const data = {
         usr: usuario,
         pwd: contraseña
      }
      Axios.post("https://backend-clinica2331.herokuapp.com/login", data).then((res)=>setToken(res.data)).catch((err)=>console.log(err)) 
      //history.push("/");
   };

   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Bienvenido a la clínica San Andrés
                              </h4>
                              
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Usuario</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       placeholder="Usuario"
                                       name="Email"
                                       value={usuario}
                                       onChange={(e)=>{setUsuario(e.target.value)}}
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Password</strong>
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       placeholder="Contraseña"
                                       name="password"
                                       value={contraseña}
                                       onChange={(e)=>{setContraseña(e.target.value)}}
                                    />
                                 </div>

                                 <div className="text-center">
                                    <button onClick={submitHandler}
                                       type="submit"
                                       className="btn btn-primary btn-block"
                                    > Iniciar Sesión</button>
                                 </div>
                              

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
