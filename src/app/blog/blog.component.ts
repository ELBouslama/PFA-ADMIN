import { domainURL } from './../shared/baseurl';
import { Article } from './../shared/classes/article';
import { BlogService } from './../shared/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles!: Article[];
  baseURL = domainURL;
  errors: any;
  searchString= "";

  constructor(
    private blogService: BlogService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.spinner.show();
    this.blogService.getArticles().subscribe(
      res => {
        this.articles = res;
        this.spinner.hide();
      },
      err => {
        this.errors = err;
        this.spinner.hide();
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      height: '600px',
      width: '800px',
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getArticles() ;
    });
  }

  openUpdateDialog(article: Article) {
    const dialogRef = this.dialog.open(EditComponent, {
      height: '600px',
      width: '800px',
      data: article,
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getArticles() ;
    });
  }

  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      height: '200px',
      width: '800px',
      data: id,
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getArticles() ;
    });
  }
}
