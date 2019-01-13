import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Account } from './account';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/account";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getAccounts (): Observable<Account[]> {
    return this.http.get<Account[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched accounts')),
        catchError(this.handleError('getAccounts', []))
      );
  }
  
  getAccount(id: string): Observable<Account> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Account>(url).pipe(
      tap(_ => console.log(`fetched account id=${id}`)),
      catchError(this.handleError<Account>(`getAccount id=${id}`))
    );
  }
  
  addAccount (account): Observable<Account> {
    return this.http.post<Account>(apiUrl, account, httpOptions).pipe(
      tap((account: Account) => console.log(`added account w/ id=${account.id}`)),
      catchError(this.handleError<Account>('addAccount'))
    );
  }
  
  updateAccount (id, account): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, account, httpOptions).pipe(
      tap(_ => console.log(`updated account id=${id}`)),
      catchError(this.handleError<any>('updateAccount'))
    );
  }
  
  deleteAccount (id): Observable<Account> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Account>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted account id=${id}`)),
      catchError(this.handleError<Account>('deleteAccount'))
    );
  }
}
