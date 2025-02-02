import { BaseLayout } from '@/shared/layouts';
import { Flayer, Form } from '../../components';
import styles from './FlayerCreator.module.scss';

export default function FlayerCreator() {
  return (
    <BaseLayout>
      <main className={styles.main}>
        <Form />
        <Flayer
          color="#ff4500"
          type="Viernes Nómada"
          location="Bogotá"
          description="Ven y disfruta de una noche llena de música y diversión"
          date="Viernes, 15 de octubre"
          place="Calle 85 # 45-11"
        />
      </main>
    </BaseLayout>
  );
}
