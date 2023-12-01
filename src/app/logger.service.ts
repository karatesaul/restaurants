import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class LoggerService {

  constructor() { }

  debug(...args: any[]) {
    if (environment.production) {
      return;
    }

    console.debug(...args);
  }

  log(...args: any[]) {
    if (environment.production) {
      return;
    }

    console.log(...args);
  }

  warn(...args: any[]) {
    console.warn(...args);
  }

  error(...args: any[]) {
    console.error(...args);
  }
}
