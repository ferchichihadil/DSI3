import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEntryComponent } from './timesheet-entry.component';

describe('TimesheetEntryComponent', () => {
  let component: TimesheetEntryComponent;
  let fixture: ComponentFixture<TimesheetEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetEntryComponent]
    });
    fixture = TestBed.createComponent(TimesheetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
