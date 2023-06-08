import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CockpitContentComponent } from './cockpitContent.component';

describe('CockpitContentComponent', () => {
  let component: CockpitContentComponent;
  let fixture: ComponentFixture<CockpitContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockpitContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});