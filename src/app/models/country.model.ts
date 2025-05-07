import { TeamModel } from './team.model';

export interface CountryModel {
  id: number;
  name: string;
  slug: string;
  teams: TeamModel[];
}
