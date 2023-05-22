import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDataComponent } from './teacher-data.component';

describe('TeacherDataComponent', () => {
  let component: TeacherDataComponent;
  let fixture: ComponentFixture<TeacherDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherDataComponent]
    });
    fixture = TestBed.createComponent(TeacherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
