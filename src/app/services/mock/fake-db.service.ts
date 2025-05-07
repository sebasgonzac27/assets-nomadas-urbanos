import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CountryModel } from '../../models/country.model';
import { TypeOfEventModel } from '../../models/type-of-event.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {
  createDb() {

    const countries: CountryModel[] = [
      {
        id: 1,
        name: 'Colombia',
        slug: 'colombia',
        teams: [
          {
            id: 1,
            name: 'Bogotá',
            slug: 'bogota',
          },
          {
            id: 2,
            name: 'Valle del Cauca',
            slug: 'valle-del-cauca',
          },
          {
            id: 3,
            name: 'Medellín',
            slug: 'medellin',
          },
          {
            id: 4,
            name: 'Boyacá',
            slug: 'boyaca',
          },
          {
            id: 5,
            name: 'Cartagena',
            slug: 'cartagena',
          },
          {
            id: 6,
            name: 'Riohacha',
            slug: 'riohacha',
          },
          {
            id: 7,
            name: 'Armenia',
            slug: 'armenia',
          },
          {
            id: 8,
            name: 'Villavicencio',
            slug: 'villavicencio',
          },
          {
            id: 9,
            name: 'Santa Marta',
            slug: 'santa-marta',
          },
          {
            id: 10,
            name: 'Barranquilla',
            slug: 'barranquilla',
          },
          {
            id: 11,
            name: 'Manizales',
            slug: 'manizales',
          }
        ]
      },
      {
        id: 2,
        name: 'Costa Rica',
        slug: 'costa-rica',
        teams: [
          {
            id: 1,
            name: 'San José',
            slug: 'san-jose',
          },
          {
            id: 2,
            name: 'Alajuela',
            slug: 'alajuela',
          },
          {
            id: 3,
            name: 'Cartago',
            slug: 'cartago',
          },
          {
            id: 4,
            name: 'Heredia',
            slug: 'heredia',
          },
          {
            id: 5,
            name: 'Guanacaste',
            slug: 'guanacaste',
          },
          {
            id: 6,
            name: 'Puntarenas',
            slug: 'puntarenas',
          }
        ]
      }
    ]

    const typeOfEvents: TypeOfEventModel[] = [
      {
        id: 1,
        name: 'Rodada',
        color: '#d50000',
      },
      {
        id: 2,
        name: 'Viernes Nómada',
        color: '#1300e2',
      },
      {
        id: 3,
        name: 'Capacitación',
        color: '#00c314',
      }
    ]

    return { countries, typeOfEvents };
  }
}
