import SocketIOClient from 'socket.io-client';

import {Person} from 'models';

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

  public subscribeToPersons = (cb: (persons: Person[]) => void) => {
    // Not passing cb directly because I want the message to be typed as Person before.
    // PersonService should work with only Person entity.
    const emitter = this.socket.on('data', (message: Person[]) => cb(message));
    const unsubscribe = () => emitter.removeEventListener('data');

    // Returning unsubscribe function helps to use with sagas and observables
    return unsubscribe;
  };
}
