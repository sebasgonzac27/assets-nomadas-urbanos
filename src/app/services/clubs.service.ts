import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ClubModel } from '../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private readonly httpClient = inject(HttpClient);

  getClubs() {
    return this.httpClient.get<ClubModel[]>('/api/clubs');
  }
}
