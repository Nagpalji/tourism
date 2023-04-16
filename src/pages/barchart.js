import React from 'react';
import Chart from "react-apexcharts";
function Barchart() {
   const series= [{
        data: [4,3,3,2.4]
      }]
  const    options= {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
    
        colors:['#0051a3','#3cdfff','#68BB59','#1E5631'],
        plotOptions: {
          bar: {
            columnWidth: '25%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true
        },
        xaxis: {
          categories: [
            ['Golden Temple', '4'],
            ['Spritual Religious Avg.', '3'],
            ['State Avg.', '4'],
            
            ['National Avg.', '2.4'],
           
          ],
          labels: {
            style: {
              
              fontSize: '12px'
            }
          }
        }
      }
    
    
    
    return ( <>
     <div id="chart">
  <Chart options={options} series={series} type="bar" height={250} />
</div>
    
    </> );
}

export default Barchart;