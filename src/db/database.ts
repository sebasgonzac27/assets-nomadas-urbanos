import { DB } from './database.interface';
export const db: DB = {
  clubs: [
    {
      id: 1,
      name: 'Nómadas Urbanos Colombia',
      logo: 'nomadas-urbanos-colombia.png',
      teams: [
        {
          id: 1,
          name: 'Valle del Cauca',
        },
        {
          id: 2,
          name: 'Bogotá',
        },
        {
          id: 3,
          name: 'Medellín',
        },
      ],
    },
    {
      id: 2,
      name: 'Nómadas Urbanos Costa Rica',
      logo: 'nomadas-urbanos-costa-rica.png',
      teams: [],
    },
  ],
  typesOfEvents: [
    {
      id: 1,
      name: 'Rodada',
      color: '#FF0000',
    },
    {
      id: 2,
      name: 'Viernes Nómada',
      color: '#FF0000',
    },
    {
      id: 3,
      name: 'Capacitación',
      color: '#FF0000',
    },
  ],
};
