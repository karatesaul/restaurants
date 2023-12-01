import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class LoggerService {
  public debug(...args: unknown[]): void {
    if (environment.production) {
      return;
    }

    console.debug(...args);
  }

  public log(...args: unknown[]): void {
    if (environment.production) {
      return;
    }

    console.log(...args);
  }

  public warn(...args: unknown[]): void {
    console.warn(...args);
  }

  public error(...args: unknown[]): void {
    console.error(...args);
  }
}
