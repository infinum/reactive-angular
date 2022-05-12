import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from '@reactive-angular/api-interfaces';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'reactive-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly nameFormControl = new FormControl('');
  private readonly loadingTrigger$ = new Subject<void>();

  public readonly people$ = combineLatest([
    this.nameFormControl.valueChanges.pipe(
      // throttleTime(500, undefined, { leading: true, trailing: true }),
      debounceTime(500), // comment this line to see bugs
      distinctUntilChanged(),
      startWith(this.nameFormControl.value)
    ),
    this.loadingTrigger$.pipe(debounceTime(500), startWith(undefined)),
  ]).pipe(
    switchMap(([name]) => {
      // replace swithcMap with mergeMap to see bugs
      return this.getPeople(name);
    })
  );

  constructor(private http: HttpClient) {}

  public onRefreshClick() {
    this.loadingTrigger$.next();
  }

  private getPeople(name: string) {
    let params = new HttpParams();

    if (name) {
      params = params.set('name', name);
    }

    return this.http.get<Array<Person>>('/api/people', { params });
  }
}
