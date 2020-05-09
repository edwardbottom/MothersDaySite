import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import {LetterComponent } from './letter/letter.component';
import { NoahLetterComponent } from './noah-letter/noah-letter.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'website';
  isVisible = false;
  password = new FormControl('');
  
  checkPassword(){
    if(this.password.value== "Hello World"){
      this.isVisible = true;
    }
  }

}
