import {Component, Input} from '@angular/core';
import {NgOptimizedImage, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-logo',
  imports: [
    NgOptimizedImage,
    TitleCasePipe
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() name = 'Colombia';
}
