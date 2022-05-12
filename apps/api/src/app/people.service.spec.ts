import { Test } from '@nestjs/testing';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PeopleService],
    }).compile();

    service = app.get<PeopleService>(PeopleService);
  });

  it('should create a service instance', () => {
    expect(service).toBeTruthy();
  });
});
