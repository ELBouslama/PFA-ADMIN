import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { BlogComponent } from './blog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    QuillModule.forRoot(),
    Ng2SearchPipeModule,
    MatSelectModule
  ]
})
export class BlogModule { }
