import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customers/customer-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-list/order-details/orderDetails.component';
import { CustomFilterPipe } from './shared/custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    OrderListComponent,
    OrderDetailsComponent,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot([
      {path:'customers', component: CustomersComponent},
      {path:'customers/:id', component: CustomerDetailsComponent},
      {path:'orders', component: OrderListComponent},
      {path:'order/:id', component: OrderDetailsComponent},
      {path: '', redirectTo:'customers', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
