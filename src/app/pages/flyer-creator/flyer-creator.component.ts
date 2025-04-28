import {Component, inject, OnInit} from '@angular/core';
import {FlyerComponent} from '../../components/flyer/flyer.component';
import {TypeOfEventModel} from '../../models/type-of-event.model';
import {ClubModel} from '../../models/club.model';
import {ClubsService} from '../../services/clubs.service';
import {TypeOfEventsService} from '../../services/type-of-events.service';
import {FormsModule} from '@angular/forms';
import {HtmlToImageService} from '../../services/html-to-image.service';

@Component({
  selector: 'app-flyer-creator',
  imports: [
    FlyerComponent,
    FormsModule
  ],
  templateUrl: './flyer-creator.component.html',
  styleUrl: './flyer-creator.component.scss'
})
export class FlyerCreatorComponent implements OnInit{
  typeOfEvents: TypeOfEventModel[] = []
  clubs: ClubModel[] = []
  values = {
    club: '',
    name: '',
    typeOfEvent: '',
    date: '',
    place: '',
  }

  image: File | null = null;

  private readonly clubsService = inject(ClubsService);
  private readonly typeOfEventsService = inject(TypeOfEventsService);
  private readonly htmlToImageService = inject(HtmlToImageService);

  ngOnInit() {
    this.clubsService.getClubs().subscribe(clubs => {
      this.clubs = clubs;
      this.values.club = clubs[0].id.toString();
    });
    this.typeOfEventsService.getTypeOfEvents().subscribe(typeOfEvents => {
      this.typeOfEvents = typeOfEvents;
      this.values.typeOfEvent = typeOfEvents[0].id.toString();
    });
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

  onDownload() {
    const flyer = document.getElementById('flyer-canvas') as HTMLElement;
    if (flyer) {
      this.htmlToImageService.exportToPng(flyer, 'flyer.png', {quality: 1});
    }
  }

  get color() {
    const type = this.typeOfEvents.find(type => type.id === +this.values.typeOfEvent);
    if (type) {
      return type.color;
    }
    return 'orange';
  }

  get location() {
    const club = this.clubs.find(club => club.id === +this.values.club);
    if (club) {
      return club.name;
    }
    return 'Colombia';
  }

  get type() {
    const type = this.typeOfEvents.find(type => type.id === +this.values.typeOfEvent);
    if (type) {
      return type.name;
    }
    return 'Rodada';
  }
}
