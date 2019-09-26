import {Injectable} from '@angular/core';
import {Comment} from './comment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export  class  CommentsService {
  private  commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl).pipe(
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
