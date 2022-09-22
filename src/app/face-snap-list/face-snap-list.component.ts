import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  /*Ce component à accès au service via l'injection de dépendance.
  Le constructor va nous injectier le service qu'il nous faut
  public ou private : crée une propriété avec ce nom faceSnapsServices
  pas la peine de faire new FaceSnapListComponent pour appeler constructor car c'est angular qui va le faire automatiquement
  Le fait de dire que la propriété doit être de type FaceSnapsService => angular va nous injecter l'instance de ce service*/

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit():void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
