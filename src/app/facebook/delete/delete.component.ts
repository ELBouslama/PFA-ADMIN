import { PacksService } from './../../shared/services/packs.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private packService: PacksService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  remove() {
    this.spinner.show();
    this.packService.deletePack(this.data).subscribe(
      res => {
        this.matDialogRef.close();
        this.spinner.hide();
      }
    );
  }
}
