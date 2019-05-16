import { Injectable } from '@angular/core';
import { IOrders } from './order';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  URL = environment.baseUrl;
  private orderUrl = this.URL+'orders.json';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrders[]> {
    return this.http.get<IOrders[]>(this.orderUrl).pipe(
      map(data => this.extractOrderData(data)),
      catchError(this.handleError)
    );
  }

  // getOrder(id: number): Observable<IOrders | undefined> {
  //   return this.getOrders().pipe(
  //     map((orders: IOrders[]) => orders.Order.find(o => o.Id === id))
  //   );
  // }

  // getCustomer(custId: string): Observable<ICustomers | undefined> {
  //   return this.getCustomers().pipe(
  //     map((customers: ICustomers[]) => customers.find(c => c.Id === custId))
  //   );
  // }

  // getCustomer(custId: string): Observable<any[]>{
  //   return this.http.get<any[]>(this.customersUrl+custId+'.json').pipe(
  //   );
  // }

  private extractOrderData(res){
    let body = res.Results;
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
