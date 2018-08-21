import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartToolbarComponent } from './start-toolbar/start-toolbar.component';
import { DataToolbarComponent } from './data-toolbar/data-toolbar.component';
import { FormulaToolbarComponent } from './formula-toolbar/formula-toolbar.component';
import { InsertToolbarComponent } from './insert-toolbar/insert-toolbar.component';
import { ViewToolbarComponent } from './view-toolbar/view-toolbar.component';
import { SettingToolbarComponent } from './setting-toolbar/setting-toolbar.component';
import { ClipboardComponent } from './start-toolbar/clipboard-board/clipboard.component';
import { FcSheetComponent } from './fc-sheet.component';
import { FormulaBarComponent } from './formular-bar/formular-bar.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpreadSheetsModule
  ],
  exports: [
    FcSheetComponent,
  ],
  declarations: [
    FcSheetComponent,
    FormulaBarComponent,
    StartToolbarComponent,
    DataToolbarComponent,
    FormulaToolbarComponent,
    InsertToolbarComponent,
    SettingToolbarComponent,
    ViewToolbarComponent,
    ClipboardComponent,
  ],
  providers: [
  ]
})
export class FcSheetModule { }
