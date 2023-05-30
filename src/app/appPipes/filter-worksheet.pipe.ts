import { Pipe, PipeTransform } from '@angular/core';
import { Worksheets } from '../entity/worksheets';

@Pipe({
  name: 'filterWorksheet'
})
export class FilterWorksheetPipe implements PipeTransform {

  transform(worksheets: Worksheets[], filterText: string) {
    console.log('Filter pipe called!');
    if(worksheets.length === 0 || filterText === ''){
        return worksheets;
    } else {
        return worksheets.filter((worksheets) => 
        { 
            return worksheets.studentName.toLowerCase() === filterText.toLowerCase()
        })
    }
}
}