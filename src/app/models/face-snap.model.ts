// Syntaxe du Model : contient toutes les propriétés necéssaires au composant + propriétés à passer dans constructor

// export class FaceSnap {
//   title!: string;
//   description!: string;
//   createdDate!: string;
//   likes!: number;
//   urlPhoto!: string;

//   constructor(title: string, description: string, urlPhoto: string, createdDate: string, likes: number) {
//     this.title = title;
//     this.description = description;
//     this.createdDate = createdDate;
//     this.likes = likes;
//     this.urlPhoto = urlPhoto;
//   }
// }

// On peut ecrire également de cette manière (raccourci) :

// export class FaceSnap {
//   constructor(
//     public title: string,
//     public description: string,
//     public urlPhoto: string,
//     public createdDate: string,
//     public likes: number) {
//   }
// }

// Si trop d'argument dans constructor, on ne l'utilise pas:

export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    createdDate!: string;
    likes!: number;
    urlPhoto!: string;
    location?: string;
  }
