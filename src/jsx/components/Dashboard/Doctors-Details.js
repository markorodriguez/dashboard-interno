import React, { useState, useEffect } from "react";
import Axios from "axios"
import { Modal, Button } from "react-bootstrap"

import "react-calendar/dist/Calendar.css";


const DoctorsDetails = () => {

  const [dnibuscar, setDniBuscar] = useState("")
  const [isFetched, setFetched] = useState(false)
  const [citas, setCitas] = useState("")
  const [citaSel, setCitaSel] = useState("")
  const [fetchedTwo, setFetchedTwo] = useState(false)
  const [modalCentered, setModalCentered] = useState(false)
  const [resultado, setResultado] = useState("")

  const handleForm = () => {
    const data = {
      dni: dnibuscar
    }
    Axios.post("https://backend-clinica2331.herokuapp.com/citaspacientes", data).then((res) => {
      setCitas(res.data)
      setFetched(true)
    }).catch((err) => { console.log(err) })
  }

  const updateResultado = () => {
    const data = {
      id: citaSel._id,
      resultado: resultado
    }

    Axios.post("https://backend-clinica2331.herokuapp.com/guardarprueba", data).then((res)=>{
      console.log(res.data)
      
    }).catch((err)=>{console.log(err)})

    setModalCentered(false)
  }

  return (
    <React.Fragment>
      <Modal className="fade" show={modalCentered}>
        <Modal.Header>
          <Modal.Title>Cambiar Resultado</Modal.Title>
          <Button
            onClick={() => setModalCentered(false)}
            variant=""
            className="close"
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ingrese el resultado de la prueba COVID.
                    </p>
          <p>Nota: los cambios se verán una vez refrescada la página.</p>
          <div className="form-group mb-0">
            <label className="radio-inline mr-3"> <input type="radio" name="optradio" value="Positivo" onClick={(e)=>{setResultado(e.target.value)}}></input> Positivo </label>
            <label className="radio-inline mr-3"> <input type="radio" name="optradio" value="Negativo" onClick={(e)=>{setResultado(e.target.value)}}></input> Negativo </label>

          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setModalCentered(false)}
            variant="danger light"
          >
            Cerrar
                    </Button>
          <Button onClick={updateResultado} variant="primary">Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
      <div className="card">
        <div className="card-header">
          <div className="row" style={{ width: '100%' }}>
            <div className="col-8">
              <h1>Buscar paciente</h1>
            </div>
            <div className="col-2">
              <input className="form-control input-default" value={dnibuscar} onChange={(e) => setDniBuscar(e.target.value)} placeholder="DNI..." ></input>
            </div>
            <div className="col-2">
              <button onClick={handleForm} className="btn btn-primary">Buscar</button>
            </div>
          </div>
        </div><div className="card-body">
          <div className="row">
            <div className="col-4">
              <table className="table table-borderless ">
                <tbody>{isFetched === true ? citas.map((el, index) => {
                  return (<tr className="di-td" onClick={() => { setCitaSel(el); setFetchedTwo(true) }} style={{ cursor: 'pointer' }} key={index}>
                    <td>#{index + 1}</td>
                    <td>{el.date}</td>
                  </tr>)
                }) : null}</tbody>
              </table>
            </div>
            <div className="col-8">
              {fetchedTwo === true ? <table className="table text-center">
                <thead className="thead-primary">
                  <tr>
                    <th>PACIENTE</th>
                    <th>RESULTADO</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{citaSel.apellidos + ' '} <strong>{citaSel.nombres}</strong></td>
                    <td>{citaSel.resultado === undefined ? 'Aún no registrado' : citaSel.resultado}</td>
                    <td><span onClick={() => { setModalCentered(true) }} className="btn btn-primary shadow btn-xs sharp mr-1">
                      <i className="fa fa-pencil"></i>
                    </span></td>
                  </tr>

                </tbody>
              </table> : null}
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default DoctorsDetails;
