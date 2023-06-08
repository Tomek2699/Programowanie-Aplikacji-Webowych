import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CockpitFooterComponent } from './cockpitFooter.component';

describe('CockpitFooterComponent', () => {
  let component: CockpitFooterComponent;
  let fixture: ComponentFixture<CockpitFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockpitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});