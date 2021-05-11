import React, { useEffect, useState } from "react";
import Axios from "axios";
import Chart from "../charts/chartist/bar"
import { set } from "date-fns";

function PatientDetails() {
  const [fetched, setFetched] = useState(false);
  const [filter, setFilter] = useState('0');
  const [total, setTotal] = useState("");
  const [positivos, setPositivos] = useState("");
  const [negativos, setNegativos] = useState("");
  const [chartTotal, setChartTotal] = useState("")
  const [chartPositivos, setChartPositivos] = useState("")
  const [chartNegativos, setChartNegativos] = useState("")


  useEffect(() => {
    const data = {
      mes: filter,
    };

    Axios.post("https://backend-clinica2331.herokuapp.com/citasmes", data).then((res) => {
      //console.log(res.data)
      setTotal(res.data)
    }).catch((err) => {
      console.log(err)
    })

    Axios.post("https://backend-clinica2331.herokuapp.com/cantidadpruebasuno", data)
      .then((res) => {
        setPositivos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.post("https://backend-clinica2331.herokuapp.com/cantidadpruebasdos", data)
      .then((res) => {
        setNegativos(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });

      Axios.post("https://backend-clinica2331.herokuapp.com/chartatendidos").then((res)=>{
        console.log(res.data)
        setChartTotal(res.data)
      }).catch((err)=>console.log(err))

      Axios.post("https://backend-clinica2331.herokuapp.com/positivosxmes", data).then((res)=>{
        setChartPositivos(res.data)
      }).catch((err)=>console.log(err))

      Axios.post("https://backend-clinica2331.herokuapp.com/negativosxmes", data).then((res)=>{
        setChartNegativos(res.data)
        setFetched(true)
      }).catch((err)=>console.log(err))

  }, [filter]);

  // hacer peticion para sacar el total por mes
  // peticion para sacar positivos del mes
  // peticion para sacar negativos del mes
  // se suman posi + nega y le resto el total para hallar los no subidos

  const saveMonth = (e) => {
    setFilter(e.target.value)
  }

  return <>
    {fetched === true ? <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="row" style={{ width: '100%' }}>
                <div className="col-lg-6">
                  <h1>Reporte de resultados</h1>
                </div>
                <div className="col-lg-6">
                  <select name="calendario" className="form-control" onChange={saveMonth} >
                    <option value={0}>General</option>
                    <option value="1" >Enero</option>
                    <option value="2" >Febrero</option>
                    <option value="3">Marzo</option>
                    <option value="4">Abril</option>
                    <option value="5">Mayo</option>
                    <option value="6">Junio</option>
                    <option value="7">Julio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="widget-stat card bg-primary">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Total de Pacientes</p>
                          <h3 className="text-white">{total.length}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="widget-stat card bg-success">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-user"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Casos Positivos</p>
                          <h3 className="text-white">{positivos.length}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="widget-stat card bg-warning">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-user"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Casos Negativos</p>
                          <h3 className="text-white">{negativos.length}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="widget-stat card bg-danger">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-user"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">No Registrados</p>
                          <h3 className="text-white">{total.length - (positivos.length + negativos.length)}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="row" style={{width: '100%'}}>
          <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              {/** peticion como el de ganancias*/}
            <Chart total={chartTotal} positivos={chartPositivos} negativos={chartNegativos}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </> : <h1>Cargando...</h1>}
  </>;
}

export default PatientDetails;
