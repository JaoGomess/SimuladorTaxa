import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareDateComponent } from './compare-date.component';

describe('CompareDateComponent', () => {
  let component: CompareDateComponent;
  let fixture: ComponentFixture<CompareDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
