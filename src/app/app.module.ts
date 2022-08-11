import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


import {AppComponent} from './app.component';
import {InMemoryDataService} from './in-memory-data.service';
import {HeaderComponent} from './header/header.component';
import {ListOfCharactersComponent} from './pages/list-of-characters/list-of-characters.component';
import {CharacterPhotoComponent} from './header/character-photo/character-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfCharactersComponent,
    CharacterPhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
