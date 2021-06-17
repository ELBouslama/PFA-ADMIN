import { BlogService } from '../../shared/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm: FormGroup;

  imgURL: any = '../../../assets/img/wait.jpg';
  imgURL2: any = '../../../assets/img/wait.jpg';
  videoURL: any = '../../../assets/img/wait.jpg';
  public message: string;
  public messageThumb: string;
  public messageVideo: string;
  blured = false;
  focused = false;
  done = false;
  done1 = false;
  done2 = false ;
  selected = 'parodentie';

  constructor(
    private blogService: BlogService,
    public matDialogRef: MatDialogRef<AddComponent>,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      former: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      imagePoster: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      nbrHours: new FormControl('', Validators.required),
      nbrModules: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categorie: new FormControl(this.selected, Validators.required),
      imageThumbnail: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      videoSrc: new FormControl('', Validators.required),
    });
  }

  add() {
    const formData = new FormData();
    formData.append('title', this.addForm.get('title').value);
    formData.append('description', this.addForm.get('description').value);
    formData.append('imagePoster', this.addForm.get('imagePoster').value);
    formData.append('former', this.addForm.get('former').value);
    formData.append('price', this.addForm.get('price').value);
    formData.append('nbrHours', this.addForm.get('nbrHours').value);
    formData.append('categorie', this.addForm.get('categorie').value);
    formData.append('nbrModules', this.addForm.get('nbrModules').value);
    formData.append('duration', this.addForm.get('duration').value);
    formData.append('imageThumbnail', this.addForm.get('imageThumbnail').value);
    formData.append('videoSrc',this.addForm.get('videoSrc').value)

    this.spinner.show();

    this.blogService.postArticle(formData).subscribe((res) => {
      this.matDialogRef.close();
      this.spinner.hide();
    });
  }

  preview(files) {
    if (files.length === 0) {
      this.message = 'Choisir un poster ';
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Ce type de fichier est non supporté';
        return;
      }

      this.addForm.get('imagePoster').setValue(files[0]);
      this.done = true;
      const objectURL = URL.createObjectURL(files[0]);
      this.imgURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      console.log(this.addForm.get('imagePoster').value);
    }
  }

  previewThumb(files) {
    if (files.length === 0) {
      this.messageThumb = 'Choisir le thumbnail ';
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.messageThumb = 'Ce type de fichier est non supporté';
        return;
      }

      this.addForm.get('imageThumbnail').setValue(files[0]);
      this.done1 = true;
      const objectURL = URL.createObjectURL(files[0]);
      this.imgURL2 = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      console.log(this.addForm.get('imageThumbnail').value);
    }
  }

  previewVideo(files) {
    if (files.length === 0) {
      this.messageVideo = 'Choisir le video du cour ';
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/video\/*/) == null) {
        this.messageVideo = 'Ce type de fichier est non supporté';
        return;
      }

      this.addForm.get('videoSrc').setValue(files[0]);
      this.done2 = true;
      const objectURL = URL.createObjectURL(files[0]);
      this.videoURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      console.log(this.addForm.get('videoSrc').value);
    }
  }

}
