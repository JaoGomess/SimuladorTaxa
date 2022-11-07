import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CieloComponent } from './cielo.component';

describe('CieloComponent', () => {
  let component: CieloComponent;
  let fixture: ComponentFixture<CieloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CieloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CieloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
