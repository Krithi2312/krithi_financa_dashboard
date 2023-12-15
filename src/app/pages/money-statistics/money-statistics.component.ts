import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent implements OnInit {
  statistics: any;
  dataSource: Object;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private httpClient: HttpClient) {
    this.chartOptions = {
      series: [{
        name: 'Income',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      }, {
        name: 'Investment',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Expenditure',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
        type: 'bar',
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + "k"
          }
        }
      },
    };
  }

  ngOnInit(): void {
    this.httpClient.get<any>('https://1.api.fy23ey06.careers.ifelsecloud.com/')
      .subscribe((data) => {
        this.statistics = data.money_statistics;
      });
  }

}
