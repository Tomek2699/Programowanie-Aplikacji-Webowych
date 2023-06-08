import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CockpitSidebarComponent } from './cockpitSidebar.component';

describe('DashboardSidebarComponent', () => {
  let component: CockpitSidebarComponent;
  let fixture: ComponentFixture<CockpitSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockpitSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});