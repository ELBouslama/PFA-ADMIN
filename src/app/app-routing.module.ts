import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrdersComponent } from './orders/orders.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { InstagramComponent } from './instagram/instagram.component';
import { FacebookComponent } from './facebook/facebook.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'videos',
    component: BlogComponent
  },
  {
    path: 'facebook',
    component: FacebookComponent
  },
  {
    path: 'instagram',
    component: InstagramComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },{
    path: 'web',
    component: WebComponent
  },{
    path: 'change-password',
    component: ChangePasswordComponent
  },{
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
