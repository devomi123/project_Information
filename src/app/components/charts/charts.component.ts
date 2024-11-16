import { Component, OnInit } from '@angular/core';
declare var $:any;
import {Chart} from 'chart.js'
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  constructor() { }

 ngOnInit(): void {
  let ctx = document.getElementById("myChart") as HTMLCanvasElement;
  let context = ctx.getContext("2d")!;


  var data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 5000, 3500],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Create the chart
  var myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

 }
}
