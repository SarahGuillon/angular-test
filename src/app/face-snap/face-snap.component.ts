import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  // title!: string;
  // description!: string;
  // createdDate!: string;
  // likes!: number;
  // urlPhoto!: string;

  ngOnInit () {
    this.buttonText = "Like";
    // this.title = "Cat picture";
    // this.description = "This is a photo of a cute cat";
    // this.createdDate = new Date(2022, 9, 20, 13, 24, 0).toLocaleString();
    // this.likes = 0;
    // this.urlPhoto = "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80";
  }

  onLike () {
    if (this.buttonText === "Like") {
      this.faceSnap.likes += 1;
      this.buttonText = "Unlike";
    } else {
      this.faceSnap.likes -= 1;
      this.buttonText = "Like";
    }
  }

}
