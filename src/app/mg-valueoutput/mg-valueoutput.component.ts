import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mg-valueoutput',
  templateUrl: './mg-valueoutput.component.html',
  styleUrls: ['./mg-valueoutput.component.css']
})
export class MgValueoutputComponent implements OnInit {
  @Input("key") key: string;
  @Input("size") size: string;
  @Input("value") value: number;
  @Input("subtitle") sub: string;
  constructor() { }

  ngOnInit() {
  }

  pad(num: number, size: number): string {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

}
