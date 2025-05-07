import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryModel } from '../models/country.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly httpClient = inject(HttpClient);

  getCountries() {
    return this.httpClient.get<CountryModel[]>('/api/countries').pipe(
      map((countries) => countries
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((country) => ({
        ...country,
        teams: country.teams.sort((a, b) => a.name.localeCompare(b.name))
      })))
    );
  }
}
