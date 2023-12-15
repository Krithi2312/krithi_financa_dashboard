import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  currentImageIndex: number = 0;
  card: number = 1;
  images: string[] = ['assets/profile/card1.png', 'assets/profile/card2.png', 'assets/profile/card.png'];

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(): void {
    this.currentImageIndex++;
    this.card++;
    if (this.currentImageIndex === this.images.length) {
      this.currentImageIndex = 0;
      this.card = 1;
    }
  }

  previousImage(): void {
    this.currentImageIndex--;
    this.card--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
      this.card = this.images.length;
    }
  }

}
