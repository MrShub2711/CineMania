import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search', component: SearchbarComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MovieDetailsComponent,
    SearchbarComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
