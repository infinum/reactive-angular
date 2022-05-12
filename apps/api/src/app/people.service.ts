import { Injectable } from '@nestjs/common';
import { Person } from '@reactive-angular/api-interfaces';

@Injectable()
export class PeopleService {
  private people: Array<Person> = [
    {
      id: '1',
      name: 'Steve',
      dateOfBirth: '1980-02-14',
    },
    {
      id: '2',
      name: 'John',
      dateOfBirth: '1981-11-24',
    },
    {
      id: '3',
      name: 'Jane',
      dateOfBirth: '1982-01-02',
    },
    {
      id: '4',
      name: 'Bob',
      dateOfBirth: '1983-06-06',
    },
    {
      id: '5',
      name: 'Mary',
      dateOfBirth: '1984-05-15',
    },
    {
      id: '6',
      name: 'Tom',
      dateOfBirth: '1985-08-20',
    },
  ];

  getPeople(name?: string): Array<Person> {
    if (!name) {
      return this.people;
    }

    return this.people.filter((person) => {
      return person.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    });
  }
}
