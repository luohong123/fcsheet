import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';
import { saveAs } from 'file-saver';
import '@grapecity/spread-sheets-charts';
export interface TabOption {
    tag: string,
    name: string,
    disabled: boolean,
    selected: boolean
}
export interface HtmlEventParamType {
    eventName: string,
    event: Event,
    param?: any
}
export enum FcSheetEvents {
    fileBtnClick = 'fileBtnClick',
    tabBtnClick = 'tabBtnClick',
}
export const tabOptions: TabOption[] = [
    { tag: 'start', name: '开始', disabled: false, selected: true },
    { tag: 'insert', name: '插入', disabled: false, selected: false },
    { tag: 'formula', name: '公式', disabled: false, selected: false },
    { tag: 'data', name: '数据', disabled: false, selected: false },
    { tag: 'view', name: '视图', disabled: false, selected: false },
    { tag: 'setting', name: '设置', disabled: false, selected: false }
]
@Component({
    selector: 'fc-sheet',
    templateUrl: './fc-sheet.component.html',
    styleUrls: [`./fc-sheet.component.scss`]
})
export class FcSheetComponent {
    spreadBackColor = 'aliceblue';
    hostStyle = {
        width: '95vw',
        height: '80vh'
    };
    private spread: GC.Spread.Sheets.Workbook;
    private fcSheetEvents = FcSheetEvents;
    tabs: TabOption[] = tabOptions;
    excelIO: any;
    public set setTabOption(tabOption: any) {
        tabOption ? this.toSetTabOption(tabOption) : throwError('please check type of param');
    }
    constructor() {
        this.excelIO = new Excel.IO();
    }
    private event(params: HtmlEventParamType) {
        switch (params.eventName) {
            case FcSheetEvents.tabBtnClick:
                this.handleTabBtnClick(params.event, params.param);
                break;
            case FcSheetEvents.fileBtnClick:
                this.handleFileBtnClick(params.event)
                break;

        }
    }
    private toSetTabOption(tabOption: TabOption) {
        this.tabs.filter(el => {
            el.tag === tabOption.tag ? el.selected = true : el.selected = false;
        });
    }
    private getWindowWidth() {
        return window.innerWidth;
    }
    private handleTabBtnClick(ev: Event, tab: TabOption) {
        this.toSetTabOption(tab);
    }
    private handleFileBtnClick(ev: Event) {

    }
    ableToRender(tag: any) {
        return this.tabs.filter(el => el.tag === tag && el.selected === true).length > 0;
    }
    //初始化
    private workbookInit(args) {
        const self = this;
        self.spread = args.spread;
        self.spread.options.scrollbarMaxAlign = true;
    }
    onFileChange(args) {
        const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
        if (self.spread && file) {
            self.excelIO.open(file, (json) => {
                self.spread.fromJSON(JSON.parse(json));
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
        const json = this.spread.toJSON({ includeBindingSource: true });
        this.excelIO.save(JSON.stringify(json), (blob: any) => {
            saveAs(blob, fileName);
        }, function (e: any) {
        });
    }
} 