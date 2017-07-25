import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Icon} from "../models/icon.model";
import { Ng2DeviceService } from 'ng2-device-detector';
import './rxjs-extensions';
import {Subject} from 'rxjs/Subject';
    
const serviceUrl = 'http://localhost:3000/icons';

@Injectable()
export class IconService {
    
    private icons = new Subject<Icon[]>();
    public icons$ = this.icons.asObservable();
    
    constructor(
        private detector: Ng2DeviceService,
        private http: Http
    ){}
    
    public getIcons(): Promise<Icon[]>{
        return this.http.get(serviceUrl)
            .toPromise()
            .then( response => {
                let icons = <Icon[]>response.json();
                this.icons.next(icons);
                return icons;
                })
            .catch(this.handleError);

    }
    
    getIcon(id: number | string): Promise<Icon> {
        return this.http.get(serviceUrl + '/' + id)
            .toPromise()
            .then( response => <Icon>response.json() )
            .catch( this.handleError );
    }

    addIcon(icon: Icon): Promise<Icon> {
        icon.created = (new Date()).toString();
        icon.browser = this.getBrowser();
        icon.os = this.getOs();
        
        const url = serviceUrl,
        body = JSON.stringify(icon),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();
    
        options.headers = headers;

        return this.http.post(url, body, options)
            .toPromise()
            .then( response => <Icon>response.json() )
            .catch( this.handleError );
    }

    updateIcon(icon: Icon): Promise<Icon> {
        icon.browser = this.getBrowser();
        icon.os = this.getOs();
        
        const url = serviceUrl + '/' + icon.id,
        body = JSON.stringify(icon),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();
    
        options.headers = headers;

        return this.http.put(url, body, options)
            .toPromise()
            .then( response => <Icon>response.json() )
            .catch( this.handleError );
    }
    
    removeIcon(icon: Icon): Promise<Icon>{
        return this.http.delete(serviceUrl + '/' + icon.id)
            .toPromise()
            .then( response => <Icon>response.json())
            .catch( this.handleError );
    }
    
    removeIconsByCategory(categoryId: number): Promise <Icon[]>{
        return this.getIcons()
            .then(
                icons => {
                    let filteredIcons = icons.filter(icon => {
                        if (icon.category == categoryId) {
                            this.removeIcon(icon);
                            return false;
                        };
                        return true;
                    });
                    this.icons.next(filteredIcons);
                    return filteredIcons;
                }
            )
            .catch( this.handleError );
    }
    
    ignoreIcon(icon: Icon): Promise<Icon> {
        icon.category = -1;
        return this.addIcon(icon);
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
    
    handleError(error: any): Promise<any> {
        alert('Please run "json-server db/db.json" to start the server.');
        return Promise.reject(error.message || error);
    }
}