import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IOrders } from './order';
// import { Observable } from 'rxjs';
import { OrderService } from './order.service';
// import {DataSource} from '@angular/cdk/collections';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
// export class OrderListComponent implements OnInit{

//   displayedColumns: string[] = ['id', 'customerId', 'employeeId'];
//   dataSource = new UserDataSource(this.orderService);
//   constructor(private orderService: OrderService ) { }
//   @ViewChild(MatSort) sort: MatSort;
//   // orderData() {

//   // }
//   // @ViewChild(MatSort) sort: MatSort;

//   ngOnInit() {

//   }


// }

// export class UserDataSource extends DataSource<any> {
//   errorMessage = '';
//   orders: IOrders[] = [];
//   constructor(private orderService: OrderService) {
//     super();
//   }
//   connect(): Observable<IOrders[]> {
//     return this.orderService.getOrders();
//   }
//   disconnect() {}
// }



export class OrderListComponent implements OnInit,AfterViewInit {
  errorMessage = '';
  orders: IOrders[] = [];
  public displayedColumns: string[] = ['Id', 'CustomerId', 'EmployeeId','ShipName','ShipCountry','ShipPostalCode'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order();
  }

  order(){
    this.orderService.getOrders().subscribe(
      orders => {
        this.orders = orders;
        this.dataSource = new MatTableDataSource<IOrders>(this.orders);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => {
          const inputVal = data.Order.Id + data.Order.CustomerId + data.Order.EmployeeId;
          const datastr = JSON.stringify(inputVal).toLocaleLowerCase();
          return datastr.includes(filter); 
        }
      },
      error => this.errorMessage = <any>error
    );

  }

  applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue;
  }

  ngAfterViewInit(): void {

  }
}
