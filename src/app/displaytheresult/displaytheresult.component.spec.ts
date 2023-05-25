import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytheresultComponent } from './displaytheresult.component';

describe('DisplaytheresultComponent', () => {
  let component: DisplaytheresultComponent;
  let fixture: ComponentFixture<DisplaytheresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaytheresultComponent]
    });
    fixture = TestBed.createComponent(DisplaytheresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
