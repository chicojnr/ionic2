import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the LowerCase pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'paraMinusculo'
})
@Injectable()
export class ParaMinusculo {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: any[]) {
    return value.toLowerCase();
  }
}
