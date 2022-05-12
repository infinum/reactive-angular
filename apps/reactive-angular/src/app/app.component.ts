import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from '@reactive-angular/api-interfaces';

@Component({
  selector: 'reactive-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly people$ = this.getPeople();

  constructor(private http: HttpClient) {}

  private getPeople() {
    return this.http.get<Array<Person>>('/api/people');
  }
}
