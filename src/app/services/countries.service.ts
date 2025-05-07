import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly httpClient = inject(HttpClient);

  getCountries() {
    return this.httpClient.get<CountryModel[]>('/api/countries');
  }
}
