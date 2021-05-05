import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { Component } from "react";


const RecoveredChart = loadable(() =>
  pMinDelay(import("./charts/home/RecoveredChart"), 1000)
);

const VisitorChart = loadable(() =>
  pMinDelay(import("./charts/home/VisitorChart"), 1000)
);
const ChartCircle = loadable(() =>
  pMinDelay(import("./charts/home/ChartCircle"), 1000)
);

const Home = () => {

  return (
    <>
      <div className="form-head d-flex mb-3 mb-md-5 align-items-start">
        <div className="mr-auto d-none d-lg-block">
          <h3 className="text-primary font-w600">Bienvenido a la clínica San Andrés</h3>
          <p className="mb-0">Sistema de Información Hospitalaria</p>
        </div>

      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-12">
          <div className="row">
            {/* <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12"> */}
            <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title">Atendidos del mes </h4>
                </div>
                <div className="card-body pb-0">
                  <div className="recovered-chart-deta d-flex">
                    <div className="col">
                      <span className="bg-danger"></span>
                      <div>
                        <p>Atendidos</p>
                        <h5>451</h5>
                      </div>
                    </div>
                    <div className="col">
                      <span className="bg-success"></span>
                      <div>
                        <p>Sin atender</p>
                        <h5>623</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 px-3 pb-3">
                  <div id="chartTimeline">
                    <RecoveredChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title">Pacientes</h4>
                </div>
                <div className="card-body px-3 pt-2">
                  <div id="chartStrock">
                    <VisitorChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title">Resultados (%)</h4>

                </div>
                <div className="card-body pt-2">
                  <h4 className="text-dark font-w400">Total Pacientes</h4>
                  <h3 className="text-primary font-w600">562,084 People</h3>
                  <div className="row mx-0 align-items-center">
                    <div className="col-sm-8 col-md-7  px-0">
                      <div id="chartCircle">
                        <ChartCircle />
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-5 px-0">
                      <div className="patients-chart-deta">
                        <div className="col px-0">
                          <span className="bg-danger"></span>
                          <div>
                            <p>Total</p>
                            <h3>64%</h3>
                          </div>
                        </div>
                        <div className="col px-0">
                          <span className="bg-success"></span>
                          <div>
                            <p>Positivos</p>
                            <h3>73%</h3>
                          </div>
                        </div>
                        <div className="col px-0">
                          <span className="bg-warning"></span>
                          <div>
                            <p>Negativos</p>
                            <h3>48%</h3>
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
                      <p className="mb-1">Citas del día</p>
                      <h3 className="text-white">76</h3>
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
                      <h3 className="text-white">$56K</h3>
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
                      <h3 className="text-white">783K</h3>
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
                      <h3 className="text-white">$76</h3>
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

export default Home;
