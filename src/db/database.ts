import { DB } from './database.interface';
export const db: DB = {
  countries: [
    {
      id: 1,
      name: 'Colombia',
      logo: 'colombia-logo.png',
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
      name: 'Costa Rica',
      logo: 'costa-rica-logo.png',
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
