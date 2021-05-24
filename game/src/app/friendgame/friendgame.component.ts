import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {FriendsService} from '../friends.service';
@Component({
  selector: 'app-friendgame',
  templateUrl: './friendgame.component.html',
  styleUrls: ['./friendgame.component.scss']
})
export class FriendgameComponent implements OnInit {
  public imagearray=['../../assets/girl1.jpg','../../assets/girl2.jpg','../../assets/girl3.jpg',"../../assets/boy1.jpg","../../assets/boy4.jpg","../../assets/boy3.jpg"]
  public selectedimage=this.imagearray[0];
  public count=0;
  public count1=0;
  public selectedimage1=this.imagearray[0];
  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  playersform = this.fb.group(
    {
      player1: ['', [Validators.required]],
      player1image:['',[Validators.required]],
      player2: ['', [Validators.required]],
      player2image:['',[Validators.required]]

    },
  )

  previous() {
    this.count--;
    if(this.count<=0) {
      this.count=this.imagearray.length-1
    }
    this.selectedimage=this.imagearray[this.count]

  }
  next() {
    this.count++;
    if(this.count>=this.imagearray.length) {
      this.count=0
    }
    this.selectedimage=this.imagearray[this.count]

  }
  previous1() {
    // console.log('..',this.count1,this.selectedimage1)
    this.count1--;
    if(this.count1<=0) {
      this.count1=this.imagearray.length-1
    }
    this.selectedimage1=this.imagearray[this.count1]

  }
  next1() {
    // console.log('..',this.count1,this.selectedimage1)

    this.count1++;
    if(this.count1>=this.imagearray.length) {
      this.count1=0
    }
    this.selectedimage1=this.imagearray[this.count1]

  }
Onsubmit(){
  this.playersform.value.player1image=this.selectedimage
  this.playersform.value.player2image = this.selectedimage1
  this.router.navigate(['/startgame'])


}
}
