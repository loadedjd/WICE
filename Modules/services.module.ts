import { Module } from '@nestjs/common';
import { DataService } from '../Services/data/data.service';
import { GatewaysModule } from './gateways.module';

@Module(
    {
        providers: [DataService],
        exports: [DataService],
    })
export class ServicesModule { }
