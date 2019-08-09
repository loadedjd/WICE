import { SubscribeMessage, WebSocketGateway } from 'node_modules/@nestjs/websockets';
import { Client } from 'socket.io';
import { DataService } from './data.service';

@WebSocketGateway()
export class DataGateway {
  constructor(private _dataService: DataService) { }
  @SubscribeMessage('export')
  handleNewData(client: Client, data: any) {
    const authData = data as Data;

    // Do some auth

    this._dataService.write(authData.namespace, authData.path, authData.data);
  }

  @SubscribeMessage('import')
  handleImpportRequest(client: Client, data: any) {
    const authData = data as Data;
    try {
      this._dataService.read(authData.namespace, authData.path);
    } catch (e) {
      console.error(e);
    }
  }
}
