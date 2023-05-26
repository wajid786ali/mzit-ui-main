import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReminderNotesComponent } from './student-reminder-notes.component';

describe('StudentReminderNotesComponent', () => {
  let component: StudentReminderNotesComponent;
  let fixture: ComponentFixture<StudentReminderNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentReminderNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentReminderNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
