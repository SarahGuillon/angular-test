import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  otherSnap!: FaceSnap;
  lastSnap!: FaceSnap;

  ngOnInit () {
    this.mySnap = new FaceSnap(
      'Cat picture',
      'This is a photo of a cute cat',
      'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      new Date(2022, 9, 20, 13, 24, 0).toLocaleString(),
      2
    );
    this.otherSnap = new FaceSnap(
      'Dog picture',
      'The dog is on the beach',
      'https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
      new Date(2022, 9, 19, 11, 32, 5).toLocaleString(),
      5
    );
    this.lastSnap = new FaceSnap(
      'Giraffe picture',
      'A Giraffe at Calgary Zoo poking his tongue out',
      'https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      new Date(2022, 8, 17, 6, 32, 5).toLocaleString(),
      5
    );
  }
}
