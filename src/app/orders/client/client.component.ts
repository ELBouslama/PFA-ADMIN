import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clientForm: FormGroup;
  image: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      name: new FormControl(this.data.name),
      email: new FormControl(this.data.email),
      address: new FormControl(this.data.address),
      telNumber: new FormControl(this.data.telNumber)
    });
    this.image = "/" + this.data.image;
  }

}
