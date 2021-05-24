import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {FriendsService} from '../friends.service';
@Component({
  selector: 'app-computergame',
  templateUrl: './computergame.component.html',
  styleUrls: ['./computergame.component.scss']
})
export class ComputergameComponent implements OnInit {
  public imagearray=['../../assets/girl1.jpg','../../assets/girl2.jpg','../../assets/girl3.jpg',"../../assets/boy1.jpg","../../assets/boy4.jpg","../../assets/boy3.jpg"]
  public selectedimage=this.imagearray[0];
  public count=0;
  constructor(private fb: FormBuilder,private router:Router,private ser:FriendsService) { }

  ngOnInit(): void {
  }
  playersform = this.fb.group(
    {
      player1: ['', [Validators.required]],
      player1image:['',[Validators.required]],
      player2: ['computer', [Validators.required]],
      player2image:['../../assets/computer.jpg',[Validators.required]]

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
  Onsubmit(){
    this.playersform.value.player1image=this.selectedimage
    this.playersform.value.player2image = 
    this.ser.details=this.playersform.value;
    this.router.navigate(['/startgame']);
  }
}
