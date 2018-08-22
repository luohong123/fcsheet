import { Component } from '@angular/core';
export interface fontOption{
    label:string,
    value:string
}
@Component({
    selector: 'font-board',
    templateUrl: './font-board.component.html',
    styleUrls: [`./font-board.component.scss`]
})
export class fontBoardComponent {
    selectedFont:string='Arial';
    selectedFontSize:number=12;
    fonts:fontOption[]=[
            {label:'Arial',value:'Arial'},
            {label:'SimSun',value:'SimSun'}
          ]
          fontSizes:Array<number>=[10,11,12];
    constructor() {
    }
    event($event) {

    }
}