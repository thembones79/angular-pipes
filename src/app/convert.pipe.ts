import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): any {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return isNaN(value) ? '' : value * 1.60934;
      case 'm':
        return isNaN(value) ? '' : value * 1.60934 * 1000;
      case 'cm':
        return isNaN(value) ? '' : value * 1.60934 * 1000 * 100;

      default:
        throw new Error('Target unit non supported');
    }
  }
}
