import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public snackbar:MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

  Edit(){
    const snackbarRef = this.snackbar.open("Title Changed SucessFully" , "!" ,{
   })
  }

  open(){
    const snackbarRef = this.snackbar.open("Redirect UrlChanged SucessFully" , "!" ,{
    })

  }

}