import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-datachart',
  templateUrl: './datachart.component.html',
  styleUrls: ['./datachart.component.scss']
})
export class DatachartComponent implements OnInit {

  constructor() { }

  @Output()
 change: EventEmitter<string> = new EventEmitter<string>();
 textdata ="";
  convertInput() {
    var json = this.tsvToJson( $("#data-input").val());
    // console.log(JSON.parse(xx));
    this.textdata = JSON.stringify(json);
    $("#results").text(JSON.stringify(json, undefined, 4));
    this.sendText();
  }
  sendText(){

    this.change.emit(this.textdata);
  }
   tsvToJson(tsvText:string){
          //Split all the text into seperate lines on new lines and carriage return feeds
          var allTextLines = tsvText.split(/\r\n|\n/);
          //Split per line on tabs and commas
          var headers = allTextLines[0].split(/\t|,/);
          var lines:any = [];
  
          for (var i=1; i<allTextLines.length; i++) {
              var data = allTextLines[i].split(/\t|,/);
              
              if (data.length == headers.length) {
              
                var row:any = {};
                let value = 0;
                for (let j=0; j<headers.length; j++) {
                  headers[j] = String(headers[j]).trim();
                  if(j==0){
                    row[headers[j]] = data[j];
                  }
                  if(j==1){
                    value =parseInt(data[j]);
                    row[headers[j]] =value;
                      }
                  

                 // console.log("data=",data[j]);
                  
                }
                lines.push(row);
              }
              
          }
  
          return lines;
      }
  




  ngOnInit(): void {
  }

}
