import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormat'
})
@Pipe({name: 'customDateFormat'}  )
export class CustomdatePipe implements PipeTransform {

  transform(value: any): Date {
    var customDate = new Date(value.match(/\d+/)[0] * 1);  
    return  customDate;
}

}
