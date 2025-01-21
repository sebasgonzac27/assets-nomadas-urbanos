import { Input, Select } from '@/shared/design-system/atoms';
import { BaseLayout } from '@/shared/layouts';
import { useState } from 'react';

import styles from './flayer-creator.module.scss';

interface FlayerForm {
  club: number;
  team: number;
  typeOfEvent: number;
  title: string;
  date: string;
  location: string;
}

const initialValues: FlayerForm = {
  club: 0,
  team: 0,
  typeOfEvent: 0,
  title: '',
  date: '',
  location: '',
};

export default function FlayerCreator() {
  const [form, setForm] = useState<FlayerForm>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <BaseLayout>
      <main className={styles['flayer-creator']}>
        <form className={styles['flayer-creator__form']}>
          <Select label="Club" name="club" options={[]}></Select>
          <Select label="Team" name="team" options={[]}></Select>
          <Select
            label="Tipo de evento"
            name="typeOfEvent"
            options={[]}
          ></Select>

          <Input
            label="Título"
            name="title"
            id="title"
            placeholder="Rodada Nocturna"
            value={form.title}
            onChange={handleChange}
          />
          <Input
            label="Fecha de encuentro"
            name="date"
            id="date"
            type="datetime-local"
            value={form.date.toString()}
            onChange={handleChange}
          />
          <Input
            label="Lugar de encuentro"
            name="location"
            id="locaiton"
            placeholder="Rodada Nocturna"
            value={form.location}
            onChange={handleChange}
          />
        </form>
        <div>Render</div>
      </main>
    </BaseLayout>
  );
}
