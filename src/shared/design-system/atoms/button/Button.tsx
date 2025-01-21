import styles from './button.module.scss';

interface Props {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Readonly<Props>) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
