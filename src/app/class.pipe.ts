import { Pipe, PipeTransform } from '@angular/core';
import { Class } from './class';

@Pipe({
  name: 'class'
})
export class ClassPipe implements PipeTransform {

  transform(array: Array<Class>, args?: number): Array<Class> {
    array.sort((
      a: any, b: any
    ) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
