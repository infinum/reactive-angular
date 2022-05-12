import { Injectable } from '@nestjs/common';
import { Person } from '@reactive-angular/api-interfaces';

@Injectable()
export class PeopleService {
  private people: Array<Person> = [
    {
      name: 'Steve',
      dateOfBirth: '1980-02-14',
    },
    {
      name: 'Stephen',
      dateOfBirth: '1980-02-16',
    },
    {
      name: 'Stan',
      dateOfBirth: '1980-02-16',
    },
    {
      name: 'John',
      dateOfBirth: '1981-11-24',
    },
    {
      name: 'Jane',
      dateOfBirth: '1982-01-02',
    },
    {
      name: 'Bob',
      dateOfBirth: '1983-06-06',
    },
    {
      name: 'Mary',
      dateOfBirth: '1984-05-15',
    },
    {
      name: 'Tom',
      dateOfBirth: '1985-08-20',
    },
  ];

  getPeople(name?: string): Array<Person> {
    const people = [...this.people];

    people.push({
      name: 'α',
      dateOfBirth: `${Math.round(2000 + Math.random() * 20)}-01-01`,
    });

    if (!name) {
      return people;
    }

    return people.filter((person) => {
      return person.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    });
  }
}
