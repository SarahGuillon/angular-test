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

export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public urlPhoto: string,
    public createdDate: string,
    public likes: number) {
  }
}
