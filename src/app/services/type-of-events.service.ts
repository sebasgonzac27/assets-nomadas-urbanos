import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeOfEventModel} from '../models/type-of-event.model';

@Injectable({
  providedIn: 'root'
})
export class TypeOfEventsService {
  private readonly httpClient = inject(HttpClient);

  getTypeOfEvents() {
    return this.httpClient.get<TypeOfEventModel[]>('/api/typeOfEvents');
  }
}
