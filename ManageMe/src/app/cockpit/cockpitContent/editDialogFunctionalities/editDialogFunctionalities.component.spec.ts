import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogFunctionalitiesComponent } from './editDialogFunctionalities.component';

describe('EditDialogFunctionalitiesComponent', () => {
  let component: EditDialogFunctionalitiesComponent;
  let fixture: ComponentFixture<EditDialogFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDialogFunctionalitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDialogFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});