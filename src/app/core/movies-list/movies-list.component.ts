import { Component, OnInit } from '@angular/core';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movieName = 'Mission Impossible';
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.movieService.searchMovies(this.movieName).subscribe( response => {
      console.log(response);
    });
  }

}
