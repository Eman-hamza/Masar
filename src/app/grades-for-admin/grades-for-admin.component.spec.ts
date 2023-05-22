import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesForAdminComponent } from './grades-for-admin.component';

describe('GradesForAdminComponent', () => {
  let component: GradesForAdminComponent;
  let fixture: ComponentFixture<GradesForAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradesForAdminComponent]
    });
    fixture = TestBed.createComponent(GradesForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
