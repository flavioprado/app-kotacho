import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
})
export class SampleDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<SampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit() {
    debugger;
    console.log('Dialog got', this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
