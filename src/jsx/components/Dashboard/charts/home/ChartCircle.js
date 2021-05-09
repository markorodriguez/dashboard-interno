import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

{
  /* Circle Chart Start */
}
class ChartCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Math.floor((datos.length/data.length)*100)

      series: [Math.round((this.props.newPositivos/this.props.newTotal)*100), Math.round((this.props.newNegativos/this.props.newTotal)*100)],
      options: {
        chart: {
          type: "radialBar",
          //width:320,
          height: 350,
          offsetY: 0,
          offsetX: 0,
          startAngle: 0,
          endAngle: 360
        },
        plotOptions: {
          radialBar: {
            size: this.props.newTotal,
            inverseOrder: false,
            hollow: {
              margin: 0,
              size: "35%",
              background: "transparent",
            },
            value: {
              formatter: function (val){
                return val + ' casos'
              }
            },
            track: {
              show: true,
              background: "#e1e5ff",
              strokeWidth: "10%",
              opacity: 1,
              margin: 15, // margin is in pixels
             
            },
            
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },
        ],

        fill: {
          opacity: 1,
        },

        

        colors: ["#ff2c53", "#209f84", "#ff5c00"],
        series: [71, 63, 90],
        labels: ["Positivos", "Negativos", "In Treatment"],
        legend: {
          fontSize: "16px",
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={350}
        />
      </>
    );
  }
}

export default ChartCircle;
