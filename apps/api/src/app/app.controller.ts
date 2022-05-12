import {
  Controller,
  Get,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { Person } from '@reactive-angular/api-interfaces';
import { lastValueFrom, timer } from 'rxjs';
import { PeopleService } from './people.service';

@Controller()
export class AppController {
  constructor(private readonly appService: PeopleService) {}

  @Get('people')
  async getPeople(@Query('name') name?: string): Promise<Array<Person>> {
    if (name === 'error') {
      throw new InternalServerErrorException();
    }

    const people = this.appService.getPeople(name);

    await artificialDelay(name ?? '');

    return people;
  }
}

async function artificialDelay(name: string) {
  const delayBase = 100 + Math.random() * 400; // 100-500ms, random
  const searchDelay = Math.max(100, 500 - name.length * 100); // 100-500ms, depending on number of characters
  const delay = delayBase + searchDelay;
  await lastValueFrom(timer(delay));
}
