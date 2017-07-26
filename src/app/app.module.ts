import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClassService } from './class.service';
import { SpellsService } from './spells.service';

import { AppComponent } from './app.component';
import { ClassPipe } from './class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClassPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SpellsService,
    ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
