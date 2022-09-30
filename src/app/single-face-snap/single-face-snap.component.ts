import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit  {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

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
