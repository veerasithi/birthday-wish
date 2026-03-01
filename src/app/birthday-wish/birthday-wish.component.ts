import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday-wish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday-wish.component.html',
  styleUrl: './birthday-wish.component.css'
})
export class BirthdayWishComponent {
  photos = [
    'IMG_3761.jpg', 'IMG_3892.jpg', 'IMG_4300.jpg', 'IMG_4310.jpg',
    'IMG_4574.jpg', 'IMG_4576.jpg', 'IMG_4582.jpg', 'IMG_4620.jpg',
    'IMG_4630.jpg', 'IMG_4659.jpg', 'IMG_4673.jpg', 'IMG_4709.jpg',
    'IMG_4712.jpg', 'IMG_4741.jpg', 'IMG_4753.jpg', 'IMG_4851.jpg',
    'IMG_5270.jpg', 'IMG_5274.jpg', 'IMG_5276.jpg', 'IMG_5279.jpg',
    'IMG_5300.jpg', 'IMG_5302.jpg'
  ];
}
