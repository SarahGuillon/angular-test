import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  /* title!: string;
  description!: string;
  createdDate!: string;
  likes!: number;
  urlPhoto!: string;  */

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit () {
    this.buttonText = "Like";
  }

  onLike () {
    if (this.buttonText === "Like") {
      this.buttonText = "Unlike";
      this.faceSnapService.onSnap(this.faceSnap.id, "Like");
    } else {
      this.buttonText = "Like";
      this.faceSnapService.onSnap(this.faceSnap.id, "Unlike");
    }
  }
}
