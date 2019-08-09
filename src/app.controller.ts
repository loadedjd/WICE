import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JsonService } from '../Data/json.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private _jsonService: JsonService) {}

  @Get()
  getHello(): string {
    return 'Hello';
  }
}
