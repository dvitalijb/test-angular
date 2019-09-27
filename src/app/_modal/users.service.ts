import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export  class  UsersService {
  private  commentsUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get<any>(this.commentsUrl).pipe(
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
