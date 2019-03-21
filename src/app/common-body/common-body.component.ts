import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "../edit-dialog/edit-dialog.component";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-common-body",
  templateUrl: "./common-body.component.html",
  styleUrls: ["./common-body.component.css"]
})
export class CommonBodyComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // passing data from Parent to Child Component 
  @Input() users ;
  @Input() type = "default";

  //when you click on the Edit button it is opened the dialog box
  openDialog(index) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: "300px",
      data: []
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.users[index].title=result
      this.usersChange.emit(this.users);

    });

  }

  //when you click on the Delete button it is opened the dialog box
  Delete(index) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
                        
      width: "330px",
      height: "250px",
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result){
      this.users = this.users.filter((users, i) => i !== index)
      }
      this.usersChange.emit(this.users);
    });
  }

  @Output() usersChange = new EventEmitter<any>();
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    this.usersChange.emit(this.users);
  }

}

