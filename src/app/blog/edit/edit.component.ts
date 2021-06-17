import { domainURL } from './../../shared/baseurl';
import { Article } from './../../shared/classes/article';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  updateForm: FormGroup;

  imgURL: any = domainURL + this.data.image;
  public message: string;
  blured = false;
  focused = false;


  constructor(
    private blogService: BlogService,
    public matDialogRef: MatDialogRef<EditComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: Article,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      title: new FormControl(this.data.title, Validators.required),
      texte: new FormControl(this.data.texte, Validators.required),
      image: new FormControl()
    });
  }

  update() {
    const formData = new FormData();
    formData.append('title', this.updateForm.get('title').value);
    formData.append('texte', this.updateForm.get('texte').value);
    if (this.updateForm.value.image != null) {
      formData.append('image', this.updateForm.get('image').value);
    }
    this.spinner.show();
    this.blogService.putArticle(formData, this.data.id).subscribe(
      res => {
        this.matDialogRef.close();
        this.spinner.hide();
      }
    );
  }

  preview(files) {
    if (files.length === 0) {
      this.message = 'Choisir une image';
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Ce type de fichier est non supporté';
      return;
    }
    this.updateForm.get('image').setValue(files[0])
    const objectURL = URL.createObjectURL(files[0]);
    this.imgURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
