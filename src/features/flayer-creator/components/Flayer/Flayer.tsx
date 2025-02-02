import ColombiaLogo from '../../assets/logos/colombia-logo.png';
import { Arrows, Calendar, Cross, MapPin } from '../icons';
import styles from './Flayer.module.scss';

import '@fontsource-variable/montserrat';

interface Props {
  color: string;
  type: string;
  location: string;
  description: string;
  date: string;
  place: string;
}

export default function Flayer({
  color,
  type,
  location,
  description,
  date,
  place,
}: Readonly<Props>) {
  return (
    <div className={styles.flayer} style={{ color }}>
      <img
        className={styles.flayer__background}
        src="https://media-public.canva.com/mrgTY/MAFkyNmrgTY/1/s2.jpg"
        alt="Imagen fondo"
      />
      <div
        className={`${styles.flayer__arrows} ${styles['flayer__arrows--top']}`}
      >
        <Arrows />
      </div>
      <div
        className={`${styles.flayer__arrows} ${styles['flayer__arrows--bottom']}`}
      >
        <Arrows />
      </div>
      <div className={styles.flayer__crosses}>
        <Cross />
        <Cross />
        <Cross />
      </div>
      <div className={styles.flayer__content}>
        <img
          className={styles.flayer__logo}
          src={ColombiaLogo}
          alt="colombia-logo"
        />
        <div className={styles.flayer__primary_text}>
          <h1 className={styles.flayer__type}>{type}</h1>
          <p className={styles.flayer__place}>{location}</p>
        </div>
        <p className={styles.flayer__description}>{description}</p>

        <div className={styles.flayer__info}>
          <div className={styles.flayer__info_item}>
            <Calendar />
            <p>{date}</p>
          </div>
          <div className={styles.flayer__info_item}>
            <MapPin />
            <p>{place}</p>
          </div>
        </div>
        <footer>
          <p className={styles.flayer__slogan}>
            Amor por las motos, pasión por la aventura
          </p>
        </footer>
      </div>
    </div>
  );
}
