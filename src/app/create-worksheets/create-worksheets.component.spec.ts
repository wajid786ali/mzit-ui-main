import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorksheetsComponent } from './create-worksheets.component';

describe('CreateWorksheetsComponent', () => {
  let component: CreateWorksheetsComponent;
  let fixture: ComponentFixture<CreateWorksheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorksheetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorksheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
