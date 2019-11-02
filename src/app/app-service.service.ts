import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private movieListObs = new Subject<any>();
  private movieDetailsObs = new Subject<any>();

  apiURL: string = 'https://api.themoviedb.org/3';
  constructor(private httpClient: HttpClient) { }

  public getMovieLists(movieName) : Observable<any>{
    let url = `${this.apiURL}/search/movie?query=`+`${movieName}&api_key=29a9236b022408fd1b49b02e63345735`;
    return this.httpClient.get(url);
  }

  public getMovieDetails(movieId){
    let url = `${this.apiURL}/movie/`+`${movieId}?api_key=29a9236b022408fd1b49b02e63345735`;
    return this.httpClient.get(url);
  }

  public sendMessage(movieLists : any){
    this.movieListObs.next(movieLists);
  }

  public getMessage(){
    return this.movieListObs.asObservable();
  }
  public sendMovieDetails(movieDet : any){
    this.movieDetailsObs.next(movieDet);
  }
  public getMvieDetailsObs(){
    return this.movieDetailsObs.asObservable();
  }
  public clearMveDetailsObs(){
    this.movieDetailsObs.next();
  }
}
