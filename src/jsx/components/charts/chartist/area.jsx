import React, { Component } from "react";
import ChartistGraph from "react-chartist";

function AreaChart(props) {
  var data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    series: [
      [
        props.ganancias.En * 100,
        props.ganancias.Fe * 100,
        props.ganancias.Mar * 100,
        props.ganancias.Ab * 100,
        props.ganancias.May * 100,
        props.ganancias.Jun * 100,
        props.ganancias.Jul * 100,
        props.ganancias.Ag * 100,
        props.ganancias.Sep * 100,
        props.ganancias.Oct * 100,
        props.ganancias.Nov * 100,
        props.ganancias.Dic * 100,
      ],
    ],
  };

  var options = {
    fullWidth: true,
    showArea: true,
    chartPadding: {
      right: 40,
    },
  };

  var type = "Line";

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h1>Reporte de ingresos</h1>
            </div>
            <div className="card-body">
              <ChartistGraph data={data} options={options} type={type} />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <div className="widget-stat card bg-success">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Enero</p>
                          <h3 className="text-white">S/ { props.ganancias.En * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-warning">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Febrero</p>
                          <h3 className="text-white">S/ { props.ganancias.Fe * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-danger">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Marzo</p>
                          <h3 className="text-white">S/ {props.ganancias.Mar * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-primary">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Abril</p>
                          <h3 className="text-white">S/ {props.ganancias.Ab * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-secondary">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Mayo</p>
                          <h3 className="text-white">S/ {props.ganancias.May * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-dark">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Junio</p>
                          <h3 className="text-white">S/ {props.ganancias.Jun * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-success">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Julio</p>
                          <h3 className="text-white">S/ {props.ganancias.Jul * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-warning">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Agosto</p>
                          <h3 className="text-white">S/ {props.ganancias.Ag * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-danger">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Septiembre</p>
                          <h3 className="text-white">S/ {props.ganancias.Sep * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-primary">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Octubre</p>
                          <h3 className="text-white">S/ { props.ganancias.Oct * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-secondary">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Noviembre</p>
                          <h3 className="text-white">S/ {props.ganancias.Nov * 100}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="widget-stat card bg-dark">
                    <div className="card-body p-4">
                      <div className="media">
                        <span className="mr-3">
                          <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white text-right">
                          <p className="mb-1">Diciembre</p>
                          <h3 className="text-white">S/ {props.ganancias.Dic * 100}</h3>
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
    </>
  );
}

export default AreaChart;
