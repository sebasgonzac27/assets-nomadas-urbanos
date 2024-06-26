import styles from './logo-creator.module.scss'

import { createRef, useState } from "react"

import skeleton from '@/assets/skeleton_logo.svg'

import { BaseLayout } from '@/layouts'
import { Button, Input } from "@/design-system"

import { toPng } from 'html-to-image'

export default function LogoCreator() {
  const [name, setName] = useState<string>('')
  const render = createRef<HTMLDivElement>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAction = () => {
    toPng(render.current as HTMLElement, { quality: 0.95, canvasWidth: 500, canvasHeight: 500})
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.href = dataUrl
      link.download = `${name || 'colombia'}-logo.png`
      link.click()
    })
  }
  return (
    <BaseLayout>
      <main className={styles['logo-creator']}>
        <section className={styles['logo-creator__form']}>
          <Input name="name" id="name" label="Nombre" placeholder="Colombia" value={name} onChange={handleChange} />
        </section>
        <section className={styles['logo-creator__render']}>
          <div className={styles.render} ref={render}>
            <div className={styles.render__inset}>
              <span className={styles.render__text}>{name || 'Colombia'}</span>
              <img src={skeleton} className={styles.render__icon}/>
            </div>
          </div>
          <Button label="Descargar" onClick={handleAction}/>
        </section>
      </main>
    </BaseLayout>
  )
}
