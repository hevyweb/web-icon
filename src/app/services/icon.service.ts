import {Injectable} from '@angular/core';
import {Icon} from "../models/icon.model";

const icons = [
    new Icon(
        0,
        0,
        '',
        76,
        '&#76;',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        1,
        1,
        '',
        77,
        '&#77;',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        2,
        0,
        '',
        78,
        '&#78;',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        3,
        2,
        '',
        79,
        '&#79;',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        4,
        2,
        '',
        80,
        '&#80;',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    )
];
        
const iconListPromise = Promise.resolve(icons);

@Injectable()
export class IconService {
    public getIcons(): Promise<Icon[]>{
        return iconListPromise;
    }
    
    getIcon(id: number | string): Promise<Icon> {
        return this.getIcons()
            .then(icons => icons.find(icon => icon.id === +id))
            .catch(() => Promise.reject('Error in getTask method'));
    }

    addIcon(icon: Icon): void {
        icons.push(icon);
    }

    updateIcon(icon: Icon): void {
        let i = -1;
        icons.forEach((item, index) => {
            if (item.id === icon.id ) {
                i = index;
                return false;
            }
        });
        if (i > -1) {
            icons.splice(i, 1, icon);
        }
    }
    
    ignoreIcon(icon: Icon): void {
        
    }
    
    getIconByCode(code: string|number): Promise<Icon> {
        return this.getIcons()
            .then(icons => 
                icons.find(icon => icon.code === +code) ||
                new Icon(null, null, '', +code, '&#' + code + ';', '', '', '', '')
            )
            .catch(() => Promise.reject('Error in getTask method'));
    }
}