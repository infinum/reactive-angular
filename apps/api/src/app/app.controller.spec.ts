import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { PeopleService } from './people.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PeopleService],
    }).compile();
  });

  describe('getPeople', () => {
    it('should return a list of people"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getPeople()).toBeInstanceOf(Array);
    });
  });
});
