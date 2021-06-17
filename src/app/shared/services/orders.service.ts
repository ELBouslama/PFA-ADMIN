import { Router, ActivatedRoute } from '@angular/router';
import { baseURL } from '../baseurl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  getOrders(page: number): Observable<any> {
    if (!page) {
      this.router.navigate(
        [],
        {
          relativeTo: this.activatedRoute,
          queryParams: { page: '1' },
          queryParamsHandling: 'merge'
        });
    }
    return this.http.get<any>(baseURL + 'orders?page=' + page);
  }
}
