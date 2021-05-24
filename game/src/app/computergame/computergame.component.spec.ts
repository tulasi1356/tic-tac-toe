import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputergameComponent } from './computergame.component';

describe('ComputergameComponent', () => {
  let component: ComputergameComponent;
  let fixture: ComponentFixture<ComputergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputergameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
