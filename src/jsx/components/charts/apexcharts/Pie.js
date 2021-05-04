import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 40],
      options: {
        chart: {
          // height: 350,
          type: "donut",
          offsetY: -10,
          // toolbar: {
          //    show: false,
          // },
        },
        labels: ["Violet Stat", "Red Stat", "Gray Stat"],
        colors: [
          "#450b5a", "#ff2c53","f8f8f8"
        ],
        stroke: {
          width: [0],
        },
        legend: {
          position: "top",
          offsetX: -10,
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                // width: 100,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div
        id="chart"
        className="text-center m-auto"
        style={{ width: this.props.width ? `${this.props.width}%` : "55%" }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={this.props.height ? this.props.height : 350}
        />
      </div>
    );
  }
}

export default ApexPie;
