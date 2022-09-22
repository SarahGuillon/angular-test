import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// Injectable: pour utiliser la class comme un service.
//on passe un object de configuration :  providedIn: 'root'
//Cela dit à Angular d'enregistrer ce service à la racine de l'application.
//Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
@Injectable ({
  providedIn: 'root'
})

// Il est important de savoir qu'un service n'a pas de méthode  ngOnInit(), car les services ne sont pas instanciés de la même manière que les components. Il faudra donc déclarer et initialiser le tableau dans la même expression :
// On accède aux services ensuite via le component avec l'injection de dépendance

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Cat picture',
      description: 'This is a photo of a cute cat',
      urlPhoto: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      createdDate: new Date(2022, 9, 20, 13, 24, 0).toLocaleString(),
      likes: 2,
      location: "Nantes"
    },
    {
      id: 2,
      title:  'Dog picture',
      description: 'The dog is on the beach',
      urlPhoto: 'https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
      createdDate: new Date(2022, 9, 19, 11, 32, 5).toLocaleString(),
      likes: 5,
      location: "Paris"
    },
    { id: 3,
      title: 'Giraffe picture',
      description: 'A Giraffe at Calgary Zoo poking his tongue out',
      urlPhoto: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(2022, 8, 17, 6, 32, 5).toLocaleString(),
      likes: 5
    }
  ]

  getAllFaceSnaps (): FaceSnap[] {
    return this.faceSnaps;
  }

  onSnap (id: number, snapType: 'Like' | 'Unlike'): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id)
    if(faceSnap) {
      snapType === 'Like' ? faceSnap.likes -- : faceSnap.likes ++;
    } else {
      throw new Error('Facesnapp not found');
    }
  }
}
