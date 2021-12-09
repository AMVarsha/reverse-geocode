import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reverse-geocode';address = "";
  constructor(
    private service: AppService,
  ) { }

  ngOnInit(): void{
    this.getMapDetails();
    
  }
  getMapDetails() {
    this.service.getMapResponse();
  }
}

