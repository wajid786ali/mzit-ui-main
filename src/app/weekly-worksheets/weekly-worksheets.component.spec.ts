import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWorksheetsComponent } from './weekly-worksheets.component';

describe('WeeklyWorksheetsComponent', () => {
  let component: WeeklyWorksheetsComponent;
  let fixture: ComponentFixture<WeeklyWorksheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyWorksheetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyWorksheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
