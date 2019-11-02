import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css']
})
export class MovieListsComponent implements OnInit {

  private movieLists : any;
  private movieDetails : any;
  constructor(private appService:AppServiceService) { }

  ngOnInit() {
    this.appService.getMessage().subscribe(res => {
      this.movieLists = res.results;
    },
        err => console.log('error while getting movie details'));
  }

  private getMovieDetails(item){
    this.appService.getMovieDetails(item.id).subscribe(res => {
      this.appService.sendMovieDetails(res);
    })
  }

}
