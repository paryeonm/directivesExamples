import { Component, OnInit } from '@angular/core';
import { User } from './User';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directivesExamples';

  items = [ "item 1", "item 2" ,"item 3", "item 4"];

  constructor (private http: HttpClient) {
    
  }

  ngOnInit() {
    const httpOption = {
      headers: new HttpHeaders ({
        'Access-Control-Allow-Origin':'*'
      })
    }

    this.http.get('https://swapi.co/api/people/1', httpOption)
    .subscribe((result: any) => {
      console.log(result);
    })
    console.log('test')
  }

 
}
