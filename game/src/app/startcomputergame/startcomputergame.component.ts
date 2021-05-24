import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startcomputergame',
  templateUrl: './startcomputergame.component.html',
  styleUrls: ['./startcomputergame.component.scss']
})
export class StartcomputergameComponent implements OnInit {
  public colorarray=['','','','','','','','',''];
  public player1="Tulasi";
  public player2="computer";
  public multi:number[][] = [[0,0,0],[0,0,0],[0,0,0]]  
  winnerimage: any;
  public start=true;
  public player:any;
  playerdetails: any;
  public gameend=false
  public count=0
  constructor() {
   }

  ngOnInit(): void {
  }
  computeraction() {
    let max=2
    let min=0
   let x=Math.floor(Math.random() * (max - min + 1)) + min
    let y=Math.floor(Math.random() * (max - min + 1)) + min
    while(this.multi[x][y]!=0) {
      x=Math.floor(Math.random() * (max - min + 1)) + min
    y=Math.floor(Math.random() * (max - min + 1)) + min
    }
    let z=x*3+y
    this.player=this.player2
    this.multi[x][y]=this.player
    
    this.colorarray[z]="blue"
    this.start=!this.start
    this.count++;
  }
  action(x:any,y:any,z:any) {
    if(this.multi[x][y]==0) {
      if(this.start) {
        this.player=this.player1
        this.colorarray[z]="pink"
        this.multi[x][y]=this.player
        this.start=!this.start
        if(this.count!=8) {
          this.computeraction()
        }
      }
      this.count++;
      if(this.count>=3) {
        for (let i = 0; i < 3; i++) {
          if((this.multi[i][0]==this.multi[i][1]) && (this.multi[i][2]==this.multi[i][1]) && (this.multi[i][0]==this.multi[i][2]) && this.multi[i][0]!=0) {
            console.log("winner row")
            this.player="winner is"+this.player
            this.gameend=true
          }
        }
        for (let i = 0; i < 3; i++) {
          if((this.multi[0][i]==this.multi[1][i]) && (this.multi[0][i]==this.multi[2][i]) && (this.multi[1][i]==this.multi[2][i]) && this.multi[0][i]!=0) {
            console.log("winner col",this.player);
            this.player="winner is"+this.player
            this.gameend=true
          }
        }
        if((this.multi[0][0]==this.multi[1][1]) && (this.multi[0][0]==this.multi[2][2]) && (this.multi[1][1]==this.multi[2][2]) && this.multi[0][0]!=0 && this.multi[1][1]!=0 && this.multi[2][2]!=0) {
          console.log("winner diag",this.player);
          this.player="winner is"+this.player
          this.gameend=true
        }
        if((this.multi[0][2]==this.multi[1][1]) && (this.multi[0][2]==this.multi[2][0]) && (this.multi[1][1]==this.multi[2][0]) && this.multi[0][2]!=0 && this.multi[1][1]!=0 && this.multi[2][0]!=0) {
          console.log("winner diag",this.player);
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
