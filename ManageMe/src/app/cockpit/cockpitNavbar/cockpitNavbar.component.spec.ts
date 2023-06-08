import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CockpitNavbarComponent } from './cockpitNavbar.component';

describe('DashboardNavbarComponent', () => {
  let component: CockpitNavbarComponent;
  let fixture: ComponentFixture<CockpitNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockpitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});