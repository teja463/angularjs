import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let limit = args.length > 0 ? args[0] : 30;
    let trail = args.length > 1 ? args[1] : '....';
    return limit > value.length ? value : value.substr(0, limit) + trail;
  }

}
