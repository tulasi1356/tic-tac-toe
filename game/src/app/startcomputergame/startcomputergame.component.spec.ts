import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcomputergameComponent } from './startcomputergame.component';

describe('StartcomputergameComponent', () => {
  let component: StartcomputergameComponent;
  let fixture: ComponentFixture<StartcomputergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartcomputergameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcomputergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
