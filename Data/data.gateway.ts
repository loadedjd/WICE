import { SubscribeMessage, WebSocketGateway } from 'node_modules/@nestjs/websockets';
import { Client } from 'socket.io';
import { DataService } from './data.service';

@WebSocketGateway()
export class DataGateway {
  constructor(private _dataService: DataService) { }
  @SubscribeMessage('export')
  handleNewData(client: Client, data: any) {
    //
  }
}
