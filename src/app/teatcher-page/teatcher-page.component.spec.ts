import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatcherPageComponent } from './teatcher-page.component';

describe('TeatcherPageComponent', () => {
  let component: TeatcherPageComponent;
  let fixture: ComponentFixture<TeatcherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeatcherPageComponent]
    });
    fixture = TestBed.createComponent(TeatcherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
