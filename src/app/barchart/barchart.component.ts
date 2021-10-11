import "core-js/stable";
import "regenerator-runtime/runtime";
import { Component,  Inject, NgZone, PLATFORM_ID,OnInit  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  private chart: am4charts.XYChart = new am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId: Object , private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  getData(e:string){
  let value= [{"country":"รพ.หนองบัวระเหว","visits":15},{"country":"รพ.เทพสถิต","visits":30},{"country":"รพ.ภักดีชุมพล","visits":33},{"country":" รพ.ชัยภูมิ","visits":23},{"country":"รพ.หนองบัวแดง","visits":22},{"country":"รพ.แก้งคร้อ","visits":18},{"country":"รพ.ภูเขียวเฉลิมพระเกียรติ","visits":9},{"country":"รพ.บ้านแท่น","visits":60}];
  console.log("value=",value);
   //console.log("json=",JSON.parse(e));
 this.datas =JSON.parse(e);//JSON.parse(value);
    this.doShowChart();

  }
  datas = [{
    "country": "USA",
    "visits": 3025
  }, {
    "country": "China",
    "visits": 1882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "UK",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 1114
  }, {
    "country": "India",
    "visits": 984
  }, {
    "country": "Spain",
    "visits": 711
  }, {
    "country": "Netherlands",
    "visits": 665
  }, {
    "country": "Russia",
    "visits": 580
  }, {
    "country": "South Korea",
    "visits": 443
  }, {
    "country": "Canada",
    "visits": 441
  }];
  doShowChart(){
    this.browserOnly(() => {
      am4core.useTheme(am4themes_kelly);

      let chart = am4core.create("chartdiv", am4charts.XYChart);
let data =this.datas;
      chart.paddingRight = 20;

    
      let data2=[
        {
            "country": "รพ.หนองบัวระเหว",
            "visits": 15
        },
        {
            "country": "รพ.เทพสถิต",
            "visits": 30
        },
        {
            "country": "รพ.ภักดีชุมพล",
            "visits": 33
        },
        {
            "country": " รพ.ชัยภูมิ",
            "visits": 23
        }
    ]
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.labels.template.horizontalCenter = "left";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 50;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.minHeight = 110;
chart.exporting.menu = new am4core.ExportMenu();
      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;


let series = chart.series.push(new am4charts.ColumnSeries());
series.sequencedInterpolation = true;
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
series.columns.template.strokeWidth = 0;

series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;
let valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{visits}";
valueLabel.label.fontSize = 14;

let hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

      chart.cursor = new am4charts.XYCursor();

    //  let scrollbarX = new am4charts.XYChartScrollbar();
    //  scrollbarX.series.push(series);
    //  chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }
  ngAfterViewInit() {
    // Chart code goes in here
this.doShowChart();
  }
  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  ngOnInit(): void {
  }

}
