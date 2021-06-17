import { PacksService } from './../shared/services/packs.service';
import { baseURL } from './../shared/baseurl';
import { Component, OnInit } from '@angular/core';
import { Pack } from '../shared/classes/pack';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  packs!: Pack[];
  baseURL = baseURL;
  errors: any;

  constructor(
    private packService: PacksService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getPacks();
  }

  getPacks() {
    this.spinner.show();
    this.packService.getPacksByType('Facebook').subscribe(
      res => {
        this.packs = res;
        this.spinner.hide()
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
      this.getPacks() ;
    });
  }

  openUpdateDialog(pack: Pack) {
    const dialogRef = this.dialog.open(EditComponent, {
      height: '600px',
      width: '800px',
      data: pack,
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPacks() ;
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
      this.getPacks() ;
    });
  }

}
