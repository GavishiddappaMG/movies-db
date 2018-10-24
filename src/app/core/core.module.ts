import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesService } from './movies-list/service/movies.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesDetailsComponent
  ]
})
export class CoreModule { }
