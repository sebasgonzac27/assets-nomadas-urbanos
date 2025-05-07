import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlyerComponent } from '../../components/flyer/flyer.component';
import { TypeOfEventModel } from '../../models/type-of-event.model';
import { HtmlToImageService } from '../../services/html-to-image.service';
import { TypeOfEventsService } from '../../services/type-of-events.service';
import { CountryModel } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';
import { TeamModel } from '../../models/team.model';

@Component({
  selector: 'app-flyer-creator',
  imports: [
    FlyerComponent,
    FormsModule
  ],
  templateUrl: './flyer-creator.component.html',
  styleUrl: './flyer-creator.component.scss'
})
export class FlyerCreatorComponent implements OnInit {
  typeOfEvents: TypeOfEventModel[] = []
  countries: CountryModel[] = []
  teams: TeamModel[] = []
  values = {
    country: '',
    team: '',
    name: '',
    typeOfEvent: '',
    date: '',
    place: '',
  }

  private _country = '';

  image: File | null = null;

  private readonly countriesService = inject(CountriesService);
  private readonly typeOfEventsService = inject(TypeOfEventsService);
  private readonly htmlToImageService = inject(HtmlToImageService);

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
      this.country = countries[0].id.toString();
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
      this.htmlToImageService.exportToPng(flyer, 'flyer.png', { quality: 1 });
    }
  }

  get color() {
    const type = this.typeOfEvents.find(type => type.id === +this.values.typeOfEvent);
    if (type) {
      return type.color;
    }
    return 'orange';
  }

  get type() {
    const type = this.typeOfEvents.find(type => type.id === +this.values.typeOfEvent);
    if (type) {
      return type.name;
    }
    return 'Rodada';
  }

  get logoUrl() {
    if (this.values.country) {
      const country = this.countries.find(country => country.id === +this.values.country);
      if (country) {
        return `/images/${country.slug}-logo.png`;
      }
    }

    return '/images/colombia-logo.png';
  }

  get country() {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
    const country = this.countries.find(c => c.id === +value);
    this.teams = country?.teams || [];
    this.values.team = this.teams[0]?.id.toString() || '';
    this.values.country = value;
  }

  get location() {
    const country = this.countries.find(c => c.id === +this.values.country);
    if (country) {
      const team = country.teams.find(t => t.id === +this.values.team);
      if (team) {
        return `${team.name}`;
      }
    }
    return '';
  }
}
