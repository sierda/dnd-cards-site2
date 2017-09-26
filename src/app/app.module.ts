import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClassService } from './class.service';
import { SpellsService } from './spells.service';
import { MdTabsModule, MdSelectModule, MdCardModule, MdButtonModule, MdCheckboxModule, MdAutocompleteModule,MdFormFieldModule, MdInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ClassPipe } from './class.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { SpellViewerComponent } from './spell-viewer/spell-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SpellComponent } from './spell/spell.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
@NgModule({
  declarations: [
    AppComponent,
    ClassPipe,
    FavoritesComponent,
    SpellViewerComponent,
    SpellComponent,
    QuickSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTabsModule,
    BrowserAnimationsModule,
    MdSelectModule,
    HttpClientModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdFormFieldModule,
    MdInputModule
  ],
  providers: [
    SpellsService,
    ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
