import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ICustomers } from './customer';
import { CustomerService } from './customer.service';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  errorMessage = '';
  _listFilter = '';
  public searchText : string;
  public displayedColumns: string[] = ['Id', 'ContactName', 'CompanyName','Address','City','Country'];
  dataSource: any;
  customers: ICustomers[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.customers;
  // }

  // filteredProducts: ICustomers[] = [];

  constructor(private customerService: CustomerService ) { }

  // performFilter(filterBy: string): ICustomers[] {
  //   filterBy = filterBy.toLocaleUpperCase();
  //   return this.customers.filter((customer: ICustomers) =>
  //     customer.Id.toLocaleUpperCase().indexOf(filterBy) !== -1);
  // }
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
        this.dataSource = new MatTableDataSource<ICustomers>(this.customers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // this.filteredProducts = this.customers;
      },
      error => this.errorMessage = <any>error
    );
  }


}
