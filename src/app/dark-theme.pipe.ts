import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkTheme',
  standalone: true
})
export default class DarkThemePipe implements PipeTransform {

  public transform(value: string): string {
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      return value.concat('-dark');
    }

    return value;
  }
}
