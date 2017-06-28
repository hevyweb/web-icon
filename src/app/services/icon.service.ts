import {Injectable} from '@angular/core';
import {Icon} from "../models/icon.model";

let icons = [
    new Icon(
        0,
        0,
        'A',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        1,
        1,
        'B',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        2,
        0,
        'C',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        3,
        2,
        'D',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    ),
    new Icon(
        4,
        2,
        'E',
        'Firefox',
        '47.0',
        'Win7',
        '28.06.2017 11:14:00'
    )
];
        
let iconListPromise = Promise.resolve(icons);

@Injectable()
export class IconService {
    public getIcons(): Promise<Icon[]>{
        return iconListPromise;
    }
    
    getIcon(id: number | string): Promise<Icon> {
        return this.getIcons()
            .then(icons => icons.find(icon => icon.id === +id))
            .catch(() => Promise.reject('Error in getTask method'));;
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
    
    getIconByCode(code: string) {
        for (let icon of icons){
            if (icon.code === code){
                return icon;
            }
        }
        return false;
    }
}