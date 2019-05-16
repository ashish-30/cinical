import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomers } from './customer';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  errorMessage = '';
  customer: any[];
  customerOrderDetails: any[];
  modifiedDate: string;
  showOrders = false;
  myDate: any;
  constructor(private customerservice: CustomerService, private route: ActivatedRoute,
    private router: Router) {

   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const custId = param;
      this.getCustomer(custId);
    }
  }

  // myDateParser(dateStr : string) : string {
  //   this.modifiedDate = Date(dateStr);
  //   return this.modifiedDate;
  // }

  myDateParser(dateStr: string): any {
    // this.modifiedDate = Date(dateStr);
    // return this.modifiedDate;
    return this.myDate = new Date(this.customDateParser(dateStr));
    }
    
    customDateParser(date: string): number {
    const re = /-?\d+/;
    const m = re.exec(date);
    return parseInt(m[0], 10);
    }

  getCustomer(custId: string) {
    this.customerservice.getCustomer(custId).subscribe(
      customer => {
            this.customer = customer;
            // this.customerOrderDetails = customer;
            console.log(this.customerOrderDetails);
       },
      error => this.errorMessage = <any>error
      );

  }

  toggleOrders(): void {
    this.showOrders = !this.showOrders;
  }

  onBack(): void {
    this.router.navigate(['/customers']);
  }

}
