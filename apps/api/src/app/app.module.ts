import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PeopleService],
})
export class AppModule {}
