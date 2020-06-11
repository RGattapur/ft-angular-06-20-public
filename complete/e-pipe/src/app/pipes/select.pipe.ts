import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(list:any, key:string,value:any ) {
      return list.length ? list.filter( item => item[key] === value ) : [] ;
  }

}

/*
  transform(cities:any, nation:string ) {
      return cities.length ? cities.filter( city => city.nation === nation ) : [] ;
  }
*/
