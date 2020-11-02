import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private obj: {
    [key: string]: any
  } = {};

  private obs: {
    [key: string]: Subject<any>
  } = {};

  constructor() { }

  get<T>(key: string): T {
    return this.obj[key];
  }

  set(key: string, value: any) {
    this.obj[key] = value;
    
    if(!this.obs[key])
    {
      this.obs[key] = new Subject<any>();
    }
    this.obs[key].next(value);
  }

  watch<T>(key: string): Observable<T>
  {
    if(!this.obs[key])
    {
      this.obs[key] = new Subject<T>();
    }

    return this.obs[key].pipe();
  }
}
