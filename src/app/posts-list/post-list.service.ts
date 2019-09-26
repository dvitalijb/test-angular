import {Injectable} from '@angular/core';
import {Post} from './post';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export  class  PostService {
  private  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${errorMessage}`;
    } else {
      errorMessage = `Server return code: ${err.status}, errors: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
