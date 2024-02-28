import { Component, Input, Output } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  categories = [...categories];
  @Input() likes: number = 0;
  isLiked = false;
  toggleLike(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}
import { Component, Input, Output } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  categories = [...categories];
  @Input() likes: number = 0;
  isLiked = false;
  toggleLike(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}
import { Component, Input, Output } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  categories = [...categories];
  @Input() likes: number = 0;
  isLiked = false;
  toggleLike(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}
import { Component, Input, Output } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  categories = [...categories];
  @Input() likes: number = 0;
  isLiked = false;
  toggleLike(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}
