import { Component } from '@angular/core';
import { projectDetails } from './projectDetails';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogTasksComponent } from './addDialogTasks/addDialogTasks.component';
import { EditDialogTasksComponent } from './editDialogTasks/editDialogTasks.component';
import { AddDialogFunctionalitiesComponent } from './addDialogFunctionalities/addDialogFunctionalities.component';
import { EditDialogFunctionalitiesComponent } from './editDialogFunctionalities/editDialogFunctionalities.component';

@Component({
  selector: 'app-cockpitContent',
  templateUrl: './cockpitContent.component.html',
  styleUrls: ['./cockpitContent.component.scss']
})
export class CockpitContentComponent {
  projectList = projectDetails;

  constructor(public dialog: MatDialog) {}

  openAddDialogTasks() {
    this.dialog.open(AddDialogTasksComponent);
  }

  openEditDialogTasks() {
    this.dialog.open(EditDialogTasksComponent);
  }

  openAddDialogFunctionalities() {
    this.dialog.open(AddDialogFunctionalitiesComponent);
  }

  openEditDialogFunctionalities() {
    this.dialog.open(EditDialogFunctionalitiesComponent);
  }

  deleteFunctionality(id: any) {
    const functionalityIndex = this.projectList[0].functionallities.findIndex(
      (func) => func.functionallityID === id
    );
    if (functionalityIndex !== -1) {
      this.projectList[0].functionallities.splice(functionalityIndex, 1);
    }
  }
}