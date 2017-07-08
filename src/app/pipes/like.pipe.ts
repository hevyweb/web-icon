import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'like'
})

export class LikePipe implements PipeTransform {
    transform(values: any[], fieldName: string, words: string[]): any[] {
        if (Array.isArray(values)) {
            if (!Array.isArray(words)){
                words = this.toArray(words);
            }
            
            return values.filter(element => {
                for (let word of words) {
                    if (element[fieldName].toLowerCase().indexOf(word.toLowerCase()) < 0) {
                        return false;
                    }
                }
                return true;
            });
        } else {
            return [];
        }
    }
    
    toArray(words: string): string[] {
        return words.trim()
        .replace(/\W+/g, " ")
        .split(" ")
        .map(word => word.trim())
        .filter(word => word.length);
    }
}