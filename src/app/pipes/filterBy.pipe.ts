import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})

export class FilterByPipe implements PipeTransform {
    transform(values: any[], fieldName: string, fieldValue: any): any[] {
        if (Array.isArray(values)) {
            if (fieldValue != null && fieldValue != undefined){
                return values.filter(element => element[fieldName] == fieldValue);
            } else {
                return values;
            }
        } else {
            return [];
        }
    }
}