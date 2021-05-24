import { Component, OnInit } from '@angular/core';
import {FriendsService} from '../friends.service';
@Component({
  selector: 'app-startfriendgame',
  templateUrl: './startfriendgame.component.html',
  styleUrls: ['./startfriendgame.component.scss']
})
export class StartfriendgameComponent implements OnInit {
  public player1:any;
  public player2:any;
  public start=true;
  public gameend=false;
  public playerdetails:any;
  public multi:number[][] = [[0,0,0],[0,0,0],[0,0,0]]  
  constructor(private ser:FriendsService) {
    this.playerdetails=this.ser.details;
    this.player1=this.playerdetails.player1;
    this.player2=this.playerdetails.player2;
    // let audio1 = new Audio();
    // audio1.src = "../../assets/Dynamite - BTS.mp3.crdownload";
    // audio1.play();
   }

  ngOnInit(): void {
  }
  public player: any;
  public count=0
  public winnerimage:any;
  public color:any;
  public colorarray=['','','','','','','','','']
  action(x:any,y:any,z:any) {

    if(this.multi[x][y]==0) {
      if(this.start) {
        this.player=this.player1
        this.winnerimage=this.playerdetails.player1image
        this.colorarray[z]="pink"
      }
     
      else {
  
        this.player=this.player2
        this.winnerimage=this.playerdetails.player2image
        this.colorarray[z]="blue"
  
      }
      this.multi[x][y]=this.player
      console.log('multi',this.multi)
      this.start=!this.start
      this.count++;
      if(this.count>=3) {
        for (let i = 0; i < 3; i++) {
          if((this.multi[i][0]==this.multi[i][1]) && (this.multi[i][2]==this.multi[i][1]) && (this.multi[i][0]==this.multi[i][2]) && this.multi[i][0]!=0) {
            // console.log("winner row",this.player);
            this.player="winner is"+this.player
            this.gameend=true
          }
        }
        for (let i = 0; i < 3; i++) {
          if((this.multi[0][i]==this.multi[1][i]) && (this.multi[0][i]==this.multi[2][i]) && (this.multi[1][i]==this.multi[2][i]) && this.multi[0][i]!=0) {
            // console.log("winner col",this.player);
            this.player="winner is"+this.player
            this.gameend=true
          }
        }
        if((this.multi[0][0]==this.multi[1][1]) && (this.multi[0][0]==this.multi[2][2]) && (this.multi[1][1]==this.multi[2][2]) && this.multi[0][0]!=0 && this.multi[1][1]!=0 && this.multi[2][2]!=0) {
          // console.log("winner diag",this.player);
          this.player="winner is"+this.player
          this.gameend=true
        }
        if((this.multi[0][2]==this.multi[1][1]) && (this.multi[0][2]==this.multi[2][0]) && (this.multi[1][1]==this.multi[2][0]) && this.multi[0][2]!=0 && this.multi[1][1]!=0 && this.multi[2][0]!=0) {
          // console.log("winner diag",this.player);
          this.player="winner is"+this.player
          this.gameend=true
        }
      }
      if(this.count==9 && !this.gameend) {
        this.player="Both of loss the game"
        this.gameend=true
      }
    }

 
   

    
  }

}
