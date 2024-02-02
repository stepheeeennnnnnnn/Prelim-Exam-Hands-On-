import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = '';
  apptitles=['Join our','online','Events this 2021!']
  index= 0
  updateTitle()
  {
    this.index++
    if(this.index==3){
      this.index= 0
    }
  }
}