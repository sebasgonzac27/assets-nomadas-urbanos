import { ComponentProps } from 'react'
import styles from './button.module.scss'

interface Props extends ComponentProps<'button'> {
  label: string
}

export default function Button ({label, ...props}:Props) {
  return (
    <button className={styles.button} {...props}>{label}</button>
  )
}
