import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  // when you click on the (Yes, Delete it !)button it will be opened SnackBar
    deleteSnackBar(){
     const snackbarRef = this.snackbar.open('Delete Sucessfully',' UNDO ',{
     });
  }

  // when you click on the (Cancel)button it will be opened SnackBar
  backSnackBar(){
    const snackbarRef = this.snackbar.open(' Information canot delete', ' UNDO',{
    });
  }

}