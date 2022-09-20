import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  title!: string;
  description!: string;
  createdDate!: string;
  likes!: number;
  buttonText!: string;
  urlPhoto!: string;


  ngOnInit () {
    this.title = "Cat picture";
    this.description = "This is a photo of a cute cat";
    this.createdDate = new Date().toLocaleString();
    this.likes = 0;
    this.buttonText = "Like";
    this.urlPhoto = "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80";
  }

  onLike () {
    if (this.buttonText === "Like") {
      this.likes += 1;
      this.buttonText = "Unlike";
    } else {
      this.likes -= 1;
      this.buttonText = "Like";
    }
  }

}
