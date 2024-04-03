import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HallsService } from '../../services/halls.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  @ViewChild('widgetsContent') widgetsContent!: ElementRef ;

  scrollLeft(){
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollLeft -= 150;
    }
  }

  scrollRight(){
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollLeft += 150;
    }
  }
  // name = 'Angular';
  // imageObject = [{
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //     title: 'Hummingbirds are amazing creatures'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //     title: 'Example with title.'
  // },{
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
  //     title: 'Hummingbirds are amazing creatures'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  // }, {
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
  //     title: 'Example two with title.'
  // }];


constructor(private _http:HallsService){}
// OnInit():void{
//   this._http.getHalls('All').subscribe({
//     next:(data)=>{
//       this.imageObject = data.results;
//     }
//   })
// }

// showAll(){
//   this._http.getHalls('All').subscribe({
//     next:(data)=>{
//       this.imageObject = data.results;
//     }
//   })
// }

// showHalls(location:string){
//   this._http.getHalls(location).subscribe({
//     next:(data)=>{
//       this.imageObject = data.results;
//     }
//   })
//  }
}
