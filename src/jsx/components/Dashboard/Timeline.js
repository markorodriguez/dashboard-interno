import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button} from "react-bootstrap";
import Axios from "axios";

import PerfectScrollbar from "react-perfect-scrollbar";

const Timeline = () => {
  const [dni, setDni] = useState("");
  const [digito, setDigito] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [telefono, setTelefono] = useState("");
  const [msj, setMessage] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fetchCantidad, setFetchedCantidad] = useState(false);

  const [show, setShow] = useState(false)

  const handleClose = () => {setShow(false)} 
  const handleShow = () => {setShow(true)}

  const enviarDatos = (e) => {
    e.preventDefault()

    const data = {
      dni: dni,
      digito: digito,
      edad: edad,
      fecha: fecha,
      telefono: telefono
  }
  Axios.post('https://backend-clinica2331.herokuapp.com/registropacientes', data).then((r)=>{
      //console.log(data)
     setMessage(r.data)
      console.log(r.data)
      handleShow()

  }).catch((err)=>{console.log(err)})
  

  }

  const resetState = (e) => {
    e.preventDefault()
    setDni("")
    setDigito("")
    setEdad("")
    setFecha("")
    setTelefono("")
  }

  return (
    <React.Fragment>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>!Atención!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>{msj}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={handleClose} variant="primary">Cerrar</Button>
  </Modal.Footer>
</Modal>

      <div className="card mt-4">
        <div className="card-header border-0 pb-0">
          <h4>Registro de pacientes</h4>
          <br />
          
        </div>
        <div className="card-body">
          <div className="widget-media best-doctor">
            <form onSubmit={enviarDatos}>
              <div className="row mt-4">
                <div className="col-sm-4">
                  <label>DNI del paciente:</label>
                  <input
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    className="form-control"
                    placeholder="Ingresar el DNI"
                    required
                  />
                </div>
                <div className="col-sm-4">
                  <label>Dígito de validación:</label>
                  <input
                    value={digito}
                    onChange={(e) => setDigito(e.target.value)}
                    className="form-control"
                    maxLength="1"
                    type="tel"
                    placeholder="XXXXXXXX-Dígito"
                    required
                  />
                </div>
                <div className="col-sm-4">
                  <label>Edad:</label>
                  <input
                  maxLength="2"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Ingresar la edad"
                    required
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6">
                  <label>Email:</label>
                  <input
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="form-control"
                    placeholder="Ingrese su email"
                  />
                </div>
                <div className="col-sm-6">
                  <label>Fecha</label>
                  <input
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="form-control"
                    type="date"
                    required
                  />
                </div>
              </div>
              <div className="row mt-4 text-center">
                <div className="col">
                  <button  className="btn btn-success" type="submit"  > Guardar </button>
                </div>
                <div className="col">
                  <button className="btn btn-danger" type="button" onClick={resetState}> Limpiar </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card-footer border-0 pt-0 text-center">
          <h5>Los registros cuentan para las citas del día</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timeline;
