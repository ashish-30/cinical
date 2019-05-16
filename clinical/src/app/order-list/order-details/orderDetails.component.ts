import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrders } from '../order';
import { OrderService } from '../order.service';
@Component({
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.css']
  })
export class OrderDetailsComponent{
    errorMessage = '';
    orders: any[] = [];
    id: number;
    finalData: any
    constructor(private ordrerservice: OrderService,private route: ActivatedRoute,
        private router: Router) {
    
       }
  
        ngOnInit() {
            // this.getOrders();
            this.ordrerservice.getOrders().subscribe(
                orders => {
                    this.orders = orders;
                    this.finalData =this.renderOrder(this.orders);
               },
              error => this.errorMessage = <any>error
              );
              const param = this.route.snapshot.paramMap.get('id');
            if (param) {
                     this.id = +param;
                     
            }
        }

        // getOrders() {
           
        // }

       renderOrder(data): any{
        console.log(this.id);
             const filterdata = data.filter(order => order.Order.Id === this.id);
             console.log(filterdata);
             return filterdata;
       }    

       onBackClick(): void {
        this.router.navigate(['/orders']);
      }
          

}