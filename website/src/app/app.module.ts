import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LetterComponent } from './letter/letter.component';
import { NoahLetterComponent } from './noah-letter/noah-letter.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HeaderComponent,
    LetterComponent,
    NoahLetterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
