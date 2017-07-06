import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'like'
})

export class LikePipe implements PipeTransform {
    transform(values: any[], fieldName: string, words: string[]): any[] {
        if (Array.isArray(values)) {
            return values.filter(element => {
                for (let word of words) {
                    if (element[fieldName].indexOf(word) < 0) {
                        return false;
                    }
                }
                return true;
            });
        } else {
            return [];
        }
    }
}