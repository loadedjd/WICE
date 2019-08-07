import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataStoreModule } from './data-store/data-store.module';
import { DataService } from './data-store/data/data.service';

@Module({
  imports: [DataStoreModule],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule {}
