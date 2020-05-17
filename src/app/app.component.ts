import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAppClient';

  constructor(
    private http: HttpClient
  ){

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    setTimeout(() => {
      this.title = 'NOOOOOOO';
    }, 4000);

    //this.http.get('http://localhost:8095/lol/tst/hello').subscribe((res) => {
    this.http.get('http://localhost:8095/lol/tst/hello',  { headers, responseType: 'text'}).subscribe((res) => {
      console.log(res)
    },(e) => {
      console.error(e);
    })

  }

}
