import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQestionComponent } from './create-qestion.component';

describe('CreateQestionComponent', () => {
  let component: CreateQestionComponent;
  let fixture: ComponentFixture<CreateQestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQestionComponent]
    });
    fixture = TestBed.createComponent(CreateQestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
