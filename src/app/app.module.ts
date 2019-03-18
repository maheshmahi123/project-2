import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

//Service
import { InfoService } from "./info.service";

// Component
import { AppComponent } from "./app.component";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "./edit-dialog/edit-dialog.component";
import { CommonBodyComponent } from "./common-body/common-body.component";
import { MainComponent } from "./main/main.component";
import { SubComponent } from "./sub/sub.component";

//Modules
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';




import { UICarouselModule } from "ui-carousel";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    CommonBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    ScrollDispatchModule,
    DragDropModule,
    MatBadgeModule,
    UICarouselModule,
    AppRoutingModule,
    MatTooltipModule

  ],
  providers: [InfoService],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent, DeleteDialogComponent,]
})
export class AppModule {}