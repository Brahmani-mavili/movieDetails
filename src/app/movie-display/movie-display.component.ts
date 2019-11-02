import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  private movieDetails : any;
  constructor(private appService:AppServiceService) { }

  ngOnInit() {

    this.appService.getMvieDetailsObs().subscribe(res => {
      this.movieDetails = res;
    })
  }

  ngOnDestroy(){
    
  }

}
