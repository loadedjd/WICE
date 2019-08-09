import { Module } from '@nestjs/common';
import { DataGateway } from '../Gates/data.gateway';
import { ControllersModule } from './controllers/controllers.module';

@Module({providers: [DataGateway], exports: [DataGateway], imports: [ControllersModule]})
export class GatewaysModule {}
