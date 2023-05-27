import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetUpdateComponent } from './worksheet-update.component';

describe('WorksheetUpdateComponent', () => {
  let component: WorksheetUpdateComponent;
  let fixture: ComponentFixture<WorksheetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksheetUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksheetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
