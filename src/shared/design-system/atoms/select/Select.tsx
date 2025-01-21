import styles from './select.module.scss';

interface SelectProps {
  name: string;
  label: string;
  options: OptionProps[];
}

interface OptionProps {
  value: string;
  label: string;
}

export function Select({ name, label, options }: Readonly<SelectProps>) {
  return (
    <div className={styles.select}>
      <label className={styles.select__label} htmlFor={name}>
        {label}:
      </label>
      <select className={styles.select__field} id={name}>
        <option value="--" disabled>
          Seleccionar
        </option>
        {options.map(({ value, label }) => (
          <option key={`${value}-${label}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
