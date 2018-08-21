import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';
import {saveAs} from 'file-saver';
import '@grapecity/spread-sheets-charts';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    spreadBackColor = 'aliceblue';
    hostStyle = {
        width: '95vw',
        height: '80vh'
    };
    private spread: GC.Spread.Sheets.Workbook;
    private excelIO;

    constructor() {
        this.excelIO = new Excel.IO();
    }

    workbookInit(args) {
        const self = this;
        self.spread = args.spread;
        self.spread.options.scrollbarMaxAlign = true;
    }

    onFileChange(args) {
        const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
        if (self.spread && file) {
            self.excelIO.open(file, (json) => {
                self.spread.fromJSON(json);
                setTimeout(() => {
                    alert('load successfully');
                }, 0);
            }, (error) => {
                alert('load fail');
            });
        }
    }


    exportexcel() {
        const fileName = (new DatePipe('en-US')).transform(new Date(), 'yyyyMMddHHmmss') + '.xlsx';
        const json = this.spread.toJSON({includeBindingSource: true});
        this.excelIO.save(JSON.stringify(json), (blob: any) => {
            saveAs(blob, fileName);
        }, function (e: any) {
        });
    }
}