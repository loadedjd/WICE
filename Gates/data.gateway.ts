import { SubscribeMessage, WebSocketGateway } from 'Gates/node_modules/@nestjs/websockets';
import { Client } from 'Gates/node_modules/socket.io';

@WebSocketGateway()
export class DataGateway {
  @SubscribeMessage('export')
  handleNewData(client: Client, data: any) {
    //
  }
}
