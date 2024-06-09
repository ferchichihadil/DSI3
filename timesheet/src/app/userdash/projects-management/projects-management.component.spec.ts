import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManagementComponent } from './projects-management.component';

describe('ProjectsManagementComponent', () => {
  let component: ProjectsManagementComponent;
  let fixture: ComponentFixture<ProjectsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsManagementComponent]
    });
    fixture = TestBed.createComponent(ProjectsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
