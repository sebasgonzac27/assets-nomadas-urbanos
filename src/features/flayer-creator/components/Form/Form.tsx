import { Input, Select } from '@/shared/design-system/atoms';
import styles from './Form.module.scss';

export default function Form() {
  return (
    <form className={styles.form}>
      <Select
        label="País"
        name="country"
        options={[
          { label: 'Colombia', value: 'col' },
          { label: 'Costa Rica', value: 'cr' },
        ]}
      />
      <Select
        label="Ciudad"
        name="city"
        options={[
          { label: 'Bogotá', value: 'bog' },
          { label: 'Medellín', value: 'med' },
          { label: 'Cali', value: 'cal' },
        ]}
      />
      <Select
        label="Tipo"
        name="type"
        options={[
          { label: 'Concierto', value: 'concert' },
          { label: 'Fiesta', value: 'party' },
          { label: 'Evento deportivo', value: 'sport' },
        ]}
      />
      <Input label="Lugar" name="place" />
      <Input label="Descripción" name="description" />
      <Input label="Fecha" name="date" type="date" />
      <Input label="Lugar de encuentro" name="place" />
    </form>
  );
}
