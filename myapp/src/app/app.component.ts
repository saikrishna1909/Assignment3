import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  showMyName=false
  logDetails=[]
  logTimes(){
    this.showMyName=!this.showMyName
    this.logDetails.push(this.logDetails.length+1)

  }
}
