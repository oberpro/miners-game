import { Component, OnInit, Input } from '@angular/core';
import { MgIfdataservice } from 'app/mg-ifdataservice';

@Component({
  selector: 'mg-toolbar',
  templateUrl: './mg-toolbar.component.html',
  styleUrls: ['./mg-toolbar.component.css']
})
export class MgToolbarComponent implements OnInit {
  @Input("service") service: MgIfdataservice;

  constructor() { }

  ngOnInit() {
  }


}
