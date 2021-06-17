import { ActivatedRoute } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrdersService } from '../../app/shared/services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any;
  searchString= "";

  startItem : number;
  endItem : number;
  totalItems :number;

  currentPage :number;
  nextPage = "";
  previousPage = "";
  lastPage: number;

  tableIndexPage;

  constructor(
    private ordersService: OrdersService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.getOrders();

    this.route.queryParams.subscribe((params) => {
      this.getOrders(+params.page);
    }
    );
  }

  getOrders(page: number) {
    //this.spinner.show();
    this.ordersService.getOrders(page).subscribe(
      res => {
        if (page > res.last_page) {
          this.getOrders(null);
        }
        this.orders = res.data;
        this.startItem = res.from;
        this.endItem = res.to;
        this.totalItems = res.total;
        this.currentPage = res.current_page;
        this.nextPage = res.next_page_url;
        this.previousPage = res.prev_page_url;
        this.lastPage = res.last_page;
        this.tableIndexPage = new Array(res.last_page);
        this.spinner.hide();
      }
    );
  }

  afficherUser(user: any) {
    const dialogRef = this.dialog.open(ClientComponent, {
      height: '600px',
      width: '800px',
      panelClass: 'custom-dialog-container',
      data: user
    });
  }

  check = (event: any,x: number) => {
    if (this.currentPage === x) {
      event.preventDefault();
    }
   }

   checkNextPage = (event: any) => {
    if (this.nextPage === "") {
      event.preventDefault();
    }
   }

   checkPreviousPage = (event: any) => {
     if (this.previousPage === "") {
       event.preventDefault();
     }
    }

}
