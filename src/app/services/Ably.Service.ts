import { Injectable } from '@angular/core';
import * as Ably from 'ably';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AblyService {
  private realtimeClient: Ably.Realtime;
  private channel: Ably.RealtimeChannel;
  
  private messagesSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messagesSubject.asObservable();


  constructor() {
    this.createAblyRealtimeInstance();
  }

  createAblyRealtimeInstance() {
    const clientOptions: Ably.ClientOptions = {
      key: 'ebibFg.N46V3Q:CVggB4lLZTGuFHd4qWEFXI8nI-xfPuqzPoPrFrp3w_c' // Replace with your Ably API key
    };

    this.realtimeClient = new Ably.Realtime(clientOptions);
    this.channel = this.realtimeClient.channels.get("chat_channel");
  }

  subscribeToChannel(callback: (message: Ably.Message ) => void) {
    this.channel.subscribe((message) => {
      callback(message, );
  
    });
    
  }


  publishMessage(message: string , id: string) {
    this.channel.publish(id, message);
  }



}
  // mouch sur si c'est la bonne methode
  