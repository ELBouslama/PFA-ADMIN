import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacksService } from './../../shared/services/packs.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  selected = 'Facebook';

  constructor(
    public matDialogRef: MatDialogRef<AddComponent>,
    public dialog: MatDialog,
    private packService: PacksService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      prix: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl(this.selected, Validators.required),
    });
  }

  add() {
    this.spinner.show();
    this.packService.postPack(this.addForm.value).subscribe(
      res => {
        this.matDialogRef.close();
        this.spinner.hide();
      }
    );
  }

}
