import { Injectable } from '@angular/core';
import { Font } from '../models/font.model';

@Injectable()
export class FontService {
    public getFonts(){
        return [
            new Font(
                'Arial',
                'fontArial'
            ),
            new Font(
                'Verdana',
                'fontVerdana'
            ),
            new Font(
                'Tahoma',
                'fontTahoma'
            ),
            new Font(
                'Times New Roman',
                'fontTimesNewRoman'
            ),
            new Font(
                'Sans Serif',
                'fontSansSerif'
            ),
        ];
    }
}
