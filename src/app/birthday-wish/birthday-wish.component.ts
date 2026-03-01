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
  showMemories = false;

  // Playful Interaction State
  clickCount = 0;
  isButtonMoving = false;
  buttonTop = '';
  buttonLeft = '';
  showMessage = false;
  currentMessage = '';
  messageTimeout: any;

  messages = [
    'Avlo easy ah click pana viduruven ah 😅🏃‍♀️',
    'Athulaya seri seri try panuga 😎✨',
    'Mmm seri thumbi ku ena treat nu solluga...... 🍰😋',
    'Seri seri Pavam nu viduren... 🥺',
    'Hahahaha Mudiyathu Summa sone... Seri Once Again Happy Birthday My dear sister 🎉'
  ];

  photos = [
    'IMG_3761.jpg', 'IMG_3892.jpg', 'IMG_4300.jpg', 'IMG_4310.jpg',
    'IMG_4574.jpg', 'IMG_4576.jpg', 'IMG_4582.jpg', 'IMG_4620.jpg',
    'IMG_4630.jpg', 'IMG_4659.jpg', 'IMG_4673.jpg', 'IMG_4709.jpg',
    'IMG_4712.jpg', 'IMG_4741.jpg', 'IMG_4753.jpg', 'IMG_4851.jpg',
    'IMG_5270.jpg', 'IMG_5274.jpg', 'IMG_5276.jpg', 'IMG_5279.jpg',
    'IMG_5300.jpg', 'IMG_5302.jpg'
  ];

  startMemories() {
    if (this.clickCount < 5) {
      this.currentMessage = this.messages[this.clickCount];
      this.showMessage = true;
      this.isButtonMoving = true;

      // Calculate random screen position to safely jump to (avoiding screen edges)
      this.buttonTop = Math.floor(Math.random() * 60 + 20) + '%';
      this.buttonLeft = Math.floor(Math.random() * 60 + 20) + '%';

      this.clickCount++;

      // Clear previous timeout so rapid clicks reset the popup timer
      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }
      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 5000); // Increased from 2500ms to 4000ms
    } else {
      // 6th click (index 5) reveals the photo collage!
      this.showMemories = true;
      this.showMessage = false;
    }
  }
}
