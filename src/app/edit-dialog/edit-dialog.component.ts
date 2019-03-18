import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public snackbar:MatSnackBar) { }

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