import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform( farenheit:number, showUnits:boolean=true ):string {
    return `${Math.floor((farenheit-32) * 5/9)}${ showUnits ? "°C":""}`
  }

}
