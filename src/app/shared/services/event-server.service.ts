import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServerService {

  private events: {
    [key: string]: EventEmitter<any>
  }= {};

  constructor() { }

  get<T>(key: string): EventEmitter<T>
  {
    if(!(key in this.events))
    {
      this.events[key] = new EventEmitter();
    }
    return this.events[key];
  }
}
