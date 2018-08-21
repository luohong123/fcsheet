import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import { FcSheetModule } from './fc-sheet';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.route';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SpreadSheetsModule,
    FcSheetModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
