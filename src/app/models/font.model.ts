import {Injectable} from '@angular/core';

@Injectable()
export class Font{
    constructor(
        public name: string,
        public className: string
    ) { }
}