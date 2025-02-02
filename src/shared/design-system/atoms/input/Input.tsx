import styles from './Input.module.scss';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label,
  name,
  placeholder,
  value,
  type = 'text',
  onChange,
}: Readonly<Props>) {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.input__label}>
        {label}:
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.input__field}
        onChange={onChange}
      />
    </div>
  );
}
