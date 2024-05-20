import styles from './logo-creator.module.scss'

import { useState } from "react"

import skeleton from '@/assets/skeleton_logo.svg'

import { BaseLayout } from '@/layouts'
import { Button, Input } from "@/design-system"

export default function LogoCreator() {
  const [name, setName] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <BaseLayout>
      <main className={styles['logo-creator']}>
        <section className={styles['logo-creator__form']}>
          <Input name="name" id="name" label="Nombre" placeholder="Colombia" value={name} onChange={handleChange} />
        </section>
        <section className={styles['logo-creator__render']}>
          <div className={styles.render}>
            <div className={styles.render__inset}>
              <span className={styles.render__text}>{name || 'Colombia'}</span>
              <img src={skeleton} className={styles.render__icon}/>
            </div>
          </div>
          <Button label="Descargar" />
        </section>
      </main>
    </BaseLayout>
  )
}
