import {Component, Input, OnChanges} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ArrowsComponent} from '../arrows/arrows.component';
import {CrossComponent} from '../cross/cross.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {MapPinComponent} from '../map-pin/map-pin.component';
import {DatetimePipe} from '../../pipes/datetime.pipe';

@Component({
  selector: 'app-flyer',
  imports: [
    ArrowsComponent,
    CrossComponent,
    CalendarComponent,
    MapPinComponent,
    NgOptimizedImage,
    DatetimePipe
  ],
  templateUrl: './flyer.component.html',
  styleUrl: './flyer.component.scss'
})
export class FlyerComponent implements OnChanges {
  @Input() color = '';
  @Input() type = '';
  @Input() location = '';
  @Input() description = '';
  @Input() date = '';
  @Input() place = '';
  @Input() image: File | null = null;

  imageUrl: string | null = null;

  ngOnChanges(): void {
    if (this.image) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(this.image);
    }
  }
}
