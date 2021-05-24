import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartfriendgameComponent } from './startfriendgame.component';

describe('StartfriendgameComponent', () => {
  let component: StartfriendgameComponent;
  let fixture: ComponentFixture<StartfriendgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartfriendgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartfriendgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
