export interface DB {
  countries: Country[];
  typesOfEvents: TypeOfEvent[];
}

interface Base {
  id: number;
  name: string;
}

export interface Country extends Base {
  logo: string;
  teams: Team[];
}

export interface Team extends Base {}

export interface TypeOfEvent extends Base {
  color: string;
}
