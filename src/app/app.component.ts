import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traxsmart-app';
  private searchedValue:string = "";

  constructor(private appService:AppServiceService) {}
  private getMovieDetails(){
    if(this.searchedValue.length >0){
      this.appService.getMovieLists(this.searchedValue).subscribe(res => this.appService.sendMessage(res));
    }
  }
}
