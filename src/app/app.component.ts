import { Component } from '@angular/core';
import { MgDataserviceService } from 'app/mg-dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private service: MgDataserviceService;
  constructor() {
    this.service = new MgDataserviceService(0, 0, 0, 0);

  }
}