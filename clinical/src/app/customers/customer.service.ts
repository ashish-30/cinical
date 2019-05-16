import { Injectable } from '@angular/core';
import { ICustomers } from './customer';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = environment.baseUrl;
  customersUrl = environment.customersUrl;
  private customerUrl = this.URL+'customers.json';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomers[]> {
    return this.http.get<ICustomers[]>(this.customerUrl).pipe(
      map(data => this.extractData(data)),
      catchError(this.handleError)
    );
  }

  // getCustomer(custId: string): Observable<ICustomers | undefined> {
  //   return this.getCustomers().pipe(
  //     map((customers: ICustomers[]) => customers.find(c => c.Id === custId))
  //   );
  // }

  getCustomer(custId: string): Observable<any[]>{
    return this.http.get<any[]>(this.customersUrl+custId+'.json').pipe(
    );
  }

  private extractData(res){
    let body = res.Customers;
     return body || [];
}

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
