import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<DeleteComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: number,
    private blogService: BlogService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.spinner.show();
    this.blogService.deleteArticle(this.data).subscribe(
      res => {
        this.matDialogRef.close();
        this.spinner.hide();
      }
    );
  }
}
