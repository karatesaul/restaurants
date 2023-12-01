import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class LoggerService {
  debug(...args: unknown[]) {
    if (environment.production) {
      return;
    }

    console.debug(...args);
  }

  log(...args: unknown[]) {
    if (environment.production) {
      return;
    }

    console.log(...args);
  }

  warn(...args: unknown[]) {
    console.warn(...args);
  }

  error(...args: unknown[]) {
    console.error(...args);
  }
}
