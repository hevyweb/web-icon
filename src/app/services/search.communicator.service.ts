import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchCommunicatorService{
    private searchPhrases = new Subject<string[]>();
    public searchPhrases$ = new Subject<string[]>();
    
    publish(searchPhrases: string[]){
        this.searchPhrases.next(searchPhrases);
    }
}
