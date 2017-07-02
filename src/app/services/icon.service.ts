import {Injectable} from '@angular/core';
import {Icon} from "../models/icon.model";
import { Ng2DeviceService } from 'ng2-device-detector';

@Injectable()
export class IconService {
    
    private icons = [
        new Icon(
            0,
            0,
            '',
            76,
            '&#76;',
            'Firefox 47.0',
            'Win7',
            '28.06.2017 11:14:00'
        ),
        new Icon(
            1,
            1,
            '',
            77,
            '&#77;',
            'Firefox 47.0',
            'Win7',
            '28.06.2017 11:14:00'
        ),
        new Icon(
            2,
            0,
            '',
            78,
            '&#78;',
            'Firefox 47.0',
            'Win7',
            '28.06.2017 11:14:00'
        ),
        new Icon(
            3,
            2,
            '',
            79,
            '&#79;',
            'Firefox 47.0',
            'Win7',
            '28.06.2017 11:14:00'
        ),
        new Icon(
            4,
            2,
            '',
            80,
            '&#80;',
            'Firefox 47.0',
            'Win7',
            '28.06.2017 11:14:00'
        )
    ];
    
    constructor(
        private detector: Ng2DeviceService
    ){}
    
    public getIcons(): Promise<Icon[]>{
        return Promise.resolve(this.icons);;
    }
    
    getIcon(id: number | string): Promise<Icon> {
        return this.getIcons()
            .then(icons => icons.find(icon => icon.id === +id))
            .catch(() => Promise.reject('Error in getTask method'));
    }

    addIcon(icon: Icon): Promise<string> {
        icon.created = (new Date()).toString();
        icon.browser = this.getBrowser();
        icon.os = this.getOs();
        icon.id = this.getNextId();
        if (!this.updateIcon(icon)) {
            this.icons.push(icon);
        }
        return Promise.resolve('Added new icon.')
            .then(() => 'All done.')
            .catch(() => 'Error.');
    }

    updateIcon(icon: Icon): boolean {
        let i = -1;
        this.icons.forEach((item, index) => {
            if (item.id === icon.id ) {
                i = index;
                return false;
            }
        });
        if (i > -1) {
            this.icons.splice(i, 1, icon);
            return true;
        }
        return false;
    }
    
    remove(code: number): Promise<Icon[]>{
        let i = -1;
        this.icons.forEach((item, index) => {
            if (item.code == code ) {
                i = index;
                return false;
            }
        });
        if (i > -1) {
            this.icons.splice(i, 1);
        }
        return this.getIcons();
    }
    
    ignoreIcon(icon: Icon): void {
        
    }
    
    getIconByCode(code: string|number): Promise<Icon> {
        return this.getIcons()
            .then(icons => 
                icons.find(icon => icon.code === +code) ||
                new Icon(null, null, '', +code, '&#' + code + ';',  '', '', '')
            )
            .catch(() => Promise.reject('Error in getTask method'));
    }
    
    getBrowser(): string {
        return this.detector.browser + ' ' + this.detector.browser_version;
    }
    
    getOs(): string{
        return this.detector.os
    }
    
    getNextId(): number{
        /**
         * @TODO rebuild it in the future
         */
        return 1;
    }
}