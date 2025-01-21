import styles from './Input.module.scss';

interface Props {
  label: string;
  name: string;
}

export function Input({ label, name }: Readonly<Props>) {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.input__label}>
        {label}:
      </label>
      <input name={name} id={name} className={styles.input__field} />
    </div>
  );
}
