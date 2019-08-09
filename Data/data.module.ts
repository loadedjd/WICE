import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataGateway } from './data.gateway';
import { JsonService } from './json.service';

@Module({
    providers: [DataService, DataGateway, JsonService],
    exports: [DataService, DataGateway, JsonService],
})
export class DataModule {}
