import { Pack } from './../../shared/classes/pack';
import { PacksService } from './../../shared/services/packs.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  updateForm: FormGroup;
  selected = 'Web';

  constructor(
    public matDialogRef: MatDialogRef<EditComponent>,
    public dialog: MatDialog,
    private packService: PacksService,
    @Inject(MAT_DIALOG_DATA) private data: Pack,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      prix: new FormControl(this.data.prix, Validators.required),
      name: new FormControl(this.data.name, Validators.required),
      details: new FormControl(this.data.details, Validators.required),
      description: new FormControl(this.data.description, Validators.required),
      type: new FormControl(this.selected, Validators.required),
    });
  }

  update() {
    this.spinner.show();
    this.packService.putPack(this.updateForm.value, this.data.id).subscribe(
      res => {
        this.matDialogRef.close();
        this.spinner.hide();
      }
    );
  }

}
