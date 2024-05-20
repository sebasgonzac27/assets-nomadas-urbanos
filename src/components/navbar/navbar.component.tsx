import styles from './navbar.module.scss'
import { NavLink } from 'react-router-dom'

const routes = [
  {
    path: '/flayer-creator',
    name: 'Flayer',
  },
  {
    path: '/logo-creator',
    name: 'Logo',
  },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        {routes.map(route => (
          <NavLink key={route.path} to={route.path} className={({isActive}) => [
            styles.header__item,
            isActive ? styles['header__item--active'] : '',
          ].join(" ")}>{route.name}</NavLink>
        ))}
      </nav>
    </header>
  )
}
