import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogTasksComponent } from './addDialogTasks.component';

describe('AddDialogTasksComponent', () => {
  let component: AddDialogTasksComponent;
  let fixture: ComponentFixture<AddDialogTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDialogTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});