export interface DB {
  clubs: Club[];
  typesOfEvents: TypeOfEvent[];
}

export interface Club {
  id: number;
  name: string;
  logo: string;
  teams: Team[];
}

export interface Team {
  id: number;
  name: string;
}

export interface TypeOfEvent {
  id: number;
  name: string;
  color: string;
}
