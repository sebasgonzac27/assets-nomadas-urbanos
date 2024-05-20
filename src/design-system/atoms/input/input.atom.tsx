import styles from './input.module.scss'
import { ComponentProps } from "react";

interface Props extends ComponentProps<'input'> {
  label: string
  name: string
  id: string
  error?: string
}

export default function Input({ label, name, id, error, ...props }: Props) {
  return (
    <div className={styles.input}>
      <label htmlFor={id} className={styles.input__label}>
        {label}:
      </label>
      <input name={name} id={id} {...props} className={styles.input__field}/>
      {error && <span className={styles.input__error}>{error}</span>}
    </div>
  )
}
