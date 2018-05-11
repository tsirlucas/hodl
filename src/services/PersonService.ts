import SocketIOClient from 'socket.io-client';

export class PersonService {
  private static instance: PersonService;
  private url = 'http://ec2-54-229-199-201.eu-west-1.compute.amazonaws.com:2345';
  private socket: SocketIOClient.Socket;

  static getInstance() {
    if (!this.instance) {
      this.instance = new PersonService();
    }

    return this.instance;
  }

  constructor() {
    this.socket = SocketIOClient.connect(this.url);
  }

  public getSocket = () => {
    return this.socket;
  };
}
