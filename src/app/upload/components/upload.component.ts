import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileInput, FileValidator } from 'ngx-material-file-input';
import { ProdutoService } from 'src/app/produto/produto.service';
import { UploadService } from '../upload.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Output() onUploadedFile = new EventEmitter();


 // readonly fileSize = 2097152;
  readonly fileSize = 100;

  fileForm: FormGroup;
  title = 'fileUpload';
  images;
  multipleImages = [];

  constructor(

    private http: HttpClient,
    private fb: FormBuilder,
    public matDialog: MatDialog,
    public matSnackBar: MatSnackBar,
    private uploadService: UploadService,

  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.fileForm = this.fb.group({
      file: [undefined, [FileValidator.maxContentSize(this.fileSize)]],
    });
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
    this.onSubmit();
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/produtos/upload', formData).subscribe(
      (res) => this.reloadFile(res),
      (err) => console.log(err));
  }

  reloadFile(res) {

    var newFileName = res;
    let formData = new FormData();
    const file = this.fileForm.get('file').value;
    formData.append('file', file, res);
    // console.log(res);
    // let formData = new FormData();
    // formData.append('file', res);
    // this.fileForm.get('file').setValue(res);
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append('files', img);
    }

    this.http.post<any>('http://localhost:3000/produtos/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}