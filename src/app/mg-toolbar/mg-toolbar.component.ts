import { Component, OnInit, Input, Inject } from '@angular/core';
import { MgIfdataservice } from 'app/mg-ifdataservice';
import { Loader } from 'app/loader';
@Component({
  selector: 'mg-toolbar',
  templateUrl: './mg-toolbar.component.html',
  styleUrls: ['./mg-toolbar.component.css']
})

export class MgToolbarComponent implements OnInit {
  @Input("service") service: MgIfdataservice;
  private units;
  constructor(private loader: Loader) {
    loader.getUnits().then((data) => {
      this.units = data;
      console.log(this.units);
    }).catch((err) => { });
  }

  ngOnInit() {
  }


}
