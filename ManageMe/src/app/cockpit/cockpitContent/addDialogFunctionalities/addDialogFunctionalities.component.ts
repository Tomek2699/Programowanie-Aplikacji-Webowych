import { Component } from '@angular/core';
import { AddFunctionality } from '../../../helpers/localStorageHelper';
import { functionality } from 'src/app/models/functionality-model';

@Component({
  selector: 'app-addDialogFunctionalities',
  templateUrl: './addDialogFunctionalities.component.html',
  styleUrls: ['./addDialogFunctionalities.component.scss']
})

export class AddDialogFunctionalitiesComponent {
  input!: string;
  data: functionality = { functionalityID: Date.now(), name: 'a', state: "ToDo", tasks: [] };
  functionallityName!: any;

  onAdd() {
    if (this.functionallityName.trim() === '') {
      return;
    }
    this.data.name = this.functionallityName;
    console.log(this.data)
    AddFunctionality(this.data);
    location.reload();
  }
}