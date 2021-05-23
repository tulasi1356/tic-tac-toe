import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendgameComponent } from './friendgame.component';

describe('FriendgameComponent', () => {
  let component: FriendgameComponent;
  let fixture: ComponentFixture<FriendgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
