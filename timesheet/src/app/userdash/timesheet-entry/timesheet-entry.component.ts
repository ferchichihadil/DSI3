import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface TimesheetEntry {
  startDate: string;
  endDate: string;
  hoursWorked: number;
  note: string;
}
@Component({
  selector: 'app-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit {
  timesheetForm: FormGroup;
  entries: TimesheetEntry[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.timesheetForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      hoursWorked: ['', [Validators.required, Validators.min(0.1), Validators.max(24)]],
      note: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  addOrUpdateEntry() {
    if (this.timesheetForm.valid) {
      if (this.editIndex !== null) {
        this.entries[this.editIndex] = this.timesheetForm.value;
        this.editIndex = null;
      } else {
        this.entries.push(this.timesheetForm.value);
      }
      this.timesheetForm.reset();
    }
  }

  editEntry(index: number) {
    this.editIndex = index;
    this.timesheetForm.setValue(this.entries[index]);
  }

  deleteEntry(index: number) {
    this.entries.splice(index, 1);
  }
}