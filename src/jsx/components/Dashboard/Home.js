import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const ChartCircle = loadable(() =>
  pMinDelay(import("./charts/home/ChartCircle"), 1000)
);


const Home = () => {
  const [data, setData] = useState(""); //citas info total
  const [fetched, setFetched] = useState(false);
  const [datos, setDatos] = useState("");
  const [negativos, setNegativos] = useState("")
  const [atendidos, setAtendidos] = useState("")
  const [pacmes, setPacMes] = useState("")
  const d = new Date();
  const mes = ("0" + (d.getMonth() + 1)).slice(-2);

  useEffect(() => {

    const datax = {
      mes: mes,
    };

    Axios.post("https://backend-clinica2331.herokuapp.com/citasmes", datax).then((res)=>{
      setPacMes(res.data)
    }).catch((err)=>{
      console.log(err)
    })

    Axios.post("https://backend-clinica2331.herokuapp.com/totaldatos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.post("https://backend-clinica2331.herokuapp.com/totalresultados")
      .then((res) => {
        setDatos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.post("https://backend-clinica2331.herokuapp.com/totalresultadosnegativos")
      .then((res) => {
        setNegativos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.post("https://backend-clinica2331.herokuapp.com/totalatendidos")
      .then((res) => {
        setAtendidos(res.data.length);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

  return (
    <>
      {fetched === true ? (
        <>
          <div className="form-head d-flex mb-3 mb-md-5 align-items-start">
            <div className="mr-auto d-none d-lg-block">
              <h3 className="text-primary font-w600">
                Bienvenido a la clínica San Andrés
              </h3>
              <p className="mb-0">Sistema de Información Hospitalaria</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-xxl-12">
              <div className="row">
                {/* <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12"> */}

                <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h4 className="card-title">Resultados (%)</h4>
                    </div>
                    <div className="card-body pt-2">
                      <h4 className="text-dark font-w400">Total Pacientes</h4>
                      <h3 className="text-primary font-w600">
                        {data.length} personas
                      </h3>
                      <div className="row mx-0 align-items-center">
                        <div className="col-sm-8 col-md-7  px-0">
                          <div id="chartCircle" style={{width: '40%'}}>
                            <ChartCircle newPositivos={datos.length} newNegativos={negativos.length} newTotal={data.length} />                    
                            
                          </div>
                        </div>
                        <div className="col-sm-4 col-md-5 px-0">
                          <div className="patients-chart-deta">
                            <div className="col px-0">
                              <span className="bg-danger"></span>
                              <div>
                                <p>Positivos</p>
                                <h3>{datos.length}</h3>
                              </div>
                            </div>
                            <div className="col px-0">
                              <span className="bg-success"></span>
                              <div>
                                <p>Negativos</p>
                                <h3>{negativos.length}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6">
                  <div className="widget-stat card bg-danger">
                    <div className="card-body  p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="flaticon-381-calendar-1"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Citas del mes</p>
                          {/* hacer peticion */}
                          <h3 className="text-white">{pacmes.length}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6">
                  <div className="widget-stat card bg-success">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="flaticon-381-diamond"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Ganancias Pruebas COVID</p>
                          {/* hacer peticion */}
                          <h3 className="text-white">S/ {atendidos * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6">
                  <div className="widget-stat card bg-info">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="flaticon-381-heart"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Total de Pacientes</p>
                          <h3 className="text-white">{data.length}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6">
                  <div className="widget-stat card bg-primary">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="flaticon-381-user-7"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Doctores</p>
                          <h3 className="text-white">20</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Home;
