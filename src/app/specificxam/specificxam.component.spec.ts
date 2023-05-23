import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificxamComponent } from './specificxam.component';

describe('SpecificxamComponent', () => {
  let component: SpecificxamComponent;
  let fixture: ComponentFixture<SpecificxamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificxamComponent]
    });
    fixture = TestBed.createComponent(SpecificxamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
