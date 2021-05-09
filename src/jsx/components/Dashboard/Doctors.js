import React, { useEffect, useState } from "react";
import Axios from "axios";


const Doctors = () => {
  const [lista, setLista] = useState("");
  const [isFetched, setFetched] = useState(false);


  useEffect(() => {
    const d = new Date();
    const dia = ("0" + d.getDate()).slice(-2);
    const mes = ("0" + d.getMonth()).slice(-2);
    const año = d.getFullYear();

    const fecha = {
      dia: dia,
      mes: mes,
      año: año,
    };

    Axios.post("https://backend-clinica2331.herokuapp.com/citashoy", fecha)
      .then((res) => {
        console.log(res);
        setLista(res.data);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {isFetched === true ? (<> 
      
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title" style={{ paddingBottom: "2rem" }}>
                  Citas para hoy
                </h1>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th>
                          <strong>#</strong>
                        </th>
                        <th>
                          <strong>DNI</strong>
                        </th>
                        <th>
                          <strong>PACIENTE</strong>
                        </th>
                        <th>
                          <strong>HORA</strong>
                        </th>
                        <th>
                          <strong>ESTADO</strong>
                        </th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {lista.map((el,index)=> 
                        <tr key={index}>
                        <td>
                          <strong>{index+1}</strong>
                        </td>
                        <td>{el.dni}</td>
                        <td>{el.apellidos + ''} <strong>{el.nombres}</strong> </td>
                        <td>{el.hora}</td>
                        <td>
                          {         
                            el.atendido === 1 ? <span id={'spanTable'+index} className="badge light badge-success">
                            Atendido
                          </span> : <span id={'spanTable'+index} className="badge light badge-warning">
                            Pendiente
                          </span>
                          }
                        </td>
                        <td>

                        </td>
                      </tr>
                      )}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default Doctors;
