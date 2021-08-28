import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import Axios from "axios";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import { setMonth } from "date-fns";

function DoctorsReview() {

    const d = new Date();
    //const mes = ("0" + (d.getMonth() + 1)).slice(-2);
    const año = d.getFullYear();


    const [fetched, setFetched] = useState(false);
    const [filter, setFilter] = useState(0);
    const [data, setData] = useState(""); //citas del mes
    const [atendidos, setAtendidos] = useState("") //atendidos por mes


    useEffect(() => {

        const datax = {
            mes: filter,
            año: año,
        };
        //citas del mes
        Axios.post("https://backend-clinica2331.herokuapp.com/textox", datax)
            .then((res) => {
                console.log(res.data)
                setData(res.data);
                //setFetched(true)
            })
            .catch((err) => console.log(err));
            //atendidos por mes
            Axios.post("https://backend-clinica2331.herokuapp.com/atendidosxmes", datax).then(
                (res)=>{
                    console.log(res.data)
                    setAtendidos(res.data)
                    setFetched(true)
                }
            )


    }, [filter]);


    const saveMonth = (e) => {
        setFilter(e.target.value)
    }

    return (<>
        {fetched === true ? <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row" style={{ width: '100%' }}>
                                <div className="col">
                                    <h1>Reporte de citas</h1>
                                </div>
                                <div className="col">
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
                                    {/* atendidos y no atendidos por mes y usar el react progress bar */}
                                </div>
                            </div>

                        </div>

                        <div className="card-body" >
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="widget-stat card bg-info">
                                        <div className="card-body p-4">
                                            <div className="media">
                                                <span className="mr-3">
                                                    <i className="la la-users"></i>
                                                </span>
                                                <div className="media-body text-white text-right">
                                                    <p className="mb-1">Total de Pacientes</p>
                                                    <h3 className="text-white">{data.length}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget-stat card bg-success">
                                        <div className="card-body p-4">
                                            <div className="media">
                                                <span className="mr-3">
                                                    <i className="la la-user"></i>
                                                </span>
                                                <div className="media-body text-white text-right">
                                                    <p className="mb-1">Atendidos</p>
                                                    <h3 className="text-white">{atendidos.length}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget-stat card bg-warning">
                                        <div className="card-body p-4">
                                            <div className="media">
                                                <span className="mr-3">
                                                    <i className="la la-user"></i>
                                                </span>
                                                <div className="media-body text-white text-right">
                                                    <p className="mb-1">No asistieron</p>
                                                    <h3 className="text-white">{data.length - atendidos.length}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> : <h1>Cargando...</h1>}
    </>);
}

export default DoctorsReview;
