import React, { Component } from "react";
import ChartistGraph from "react-chartist";

function BarChart(props) {
   var data = {
      labels: [
         "Ene",
         "Feb",
         "Mar",
         "Abr",
         "May",
         "Jun",
         "Jul",
         "Ago",
         "Sep",
         "Oct",
         "Nov",
         "Dic",
      ],
      series: [
         [props.total.En, props.total.Fe, props.total.Mar, props.total.Ab, props.total.May, props.total.Jun,props.total.Jul, props.total.Ag, props.total.Sep, props.total.Oct, props.total.Nov, props.total.Dic], //total pacientes
         [props.positivos.En, props.positivos.Fe, props.positivos.Mar, props.positivos.Ab, props.positivos.May, props.positivos.Jun,props.positivos.Jul, props.positivos.Ag, props.positivos.Sep, props.positivos.Oct, props.positivos.Nov, props.positivos.Dic], 
         [props.negativos.En, props.negativos.Fe, props.negativos.Mar, props.negativos.Ab, props.negativos.May, props.negativos.Jun,props.negativos.Jul, props.negativos.Ag, props.negativos.Sep, props.negativos.Oct, props.negativos.Nov, props.negativos.Dic],
         
      ],
   };

   var options = {
      fullWidth: true,
      seriesBarDistance: 20,
      chartPadding: {
         right: 20,
      },
   };

   var type = "Bar";

   return (
      <>
         <ChartistGraph data={data} options={options} type={type} id="abc" />
      </>
   );
}

export default BarChart;
