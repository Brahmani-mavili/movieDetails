import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { MovieWrapperComponent } from './movie-wrapper/movie-wrapper.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieWrapperComponent,
    MovieListsComponent,
    MovieDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
