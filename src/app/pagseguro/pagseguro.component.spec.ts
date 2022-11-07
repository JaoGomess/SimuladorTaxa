import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagseguroComponent } from './pagseguro.component';

describe('PagseguroComponent', () => {
  let component: PagseguroComponent;
  let fixture: ComponentFixture<PagseguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagseguroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
