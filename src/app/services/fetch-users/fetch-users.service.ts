import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {

  constructor(private http: HttpClient) {


  }

  fetchUsers(): Observable<any> {

    return this.http.get('https://reqres.in/api/users?page=1').pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  handleError(error: HttpErrorResponse): Observable<never> {

    let errorMessage = 'Unknown error'

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`
    }
    else {
      errorMessage = `Something Went Wrong! Error code: ${error.status}`
    }

    return throwError(() => errorMessage)

  }
}
