import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getMapResponse() {
    return fetch(this.apiUrl).then(response => response.json())
    .then(data =>  {
      console.log(data);
      
    })
    .catch(err => console.warn(err.message) );
  }
}
