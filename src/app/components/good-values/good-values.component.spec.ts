import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodValuesComponent } from './good-values.component';

describe('GoodValuesComponent', () => {
  let component: GoodValuesComponent;
  let fixture: ComponentFixture<GoodValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
