import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ClubModel} from '../../models/club.model';
import {TypeOfEventModel} from '../../models/type-of-event.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService{
  createDb() {
    const clubs: ClubModel[] = [
      {
        id: 1,
        name: 'Bogotá',
        slug: 'bogota'
      },
      {
        id: 2,
        name: 'Valle del Cauca',
        slug: 'valle'
      }
    ]
    const typeOfEvents: TypeOfEventModel[] = [
      {
        id: 1,
        name: 'Rodada',
        color: '#FF0000',
      },
      {
        id: 2,
        name: 'Viernes Nómada',
        color: '#00FF00',
      },
      {
        id: 3,
        name: 'Capacitación',
        color: '#1100ff',
      }
    ]

    return {clubs, typeOfEvents};
  }
}
