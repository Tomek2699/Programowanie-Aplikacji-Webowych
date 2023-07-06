import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaveFunctionalities } from 'src/app/helpers/localStorageHelper';

@Component({
  selector: 'app-editDialogFunctionalities',
  templateUrl: './editDialogFunctionalities.component.html',
  styleUrls: ['./editDialogFunctionalities.component.scss']
})
export class EditDialogFunctionalitiesComponent {
  name = ''
  loadProjects: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    const storedData = localStorage.getItem('functionalities');
    if (storedData) {
      this.loadProjects = JSON.parse(storedData);
    }
  }

  updateFunctionality() {
    const index = this.loadProjects.findIndex((item: any) => item.name === this.data.name);

    if (index !== -1) {
      this.loadProjects[index].name = this.name;
      SaveFunctionalities(this.loadProjects);
    }
    location.reload();
  }

  ngOnInit(): void {
    const nameOfEditFunctionality = this.loadProjects.filter((item: any) => item.name === this.data.name);
    this.name = nameOfEditFunctionality[0].name
    console.log(this.name)
  }
}