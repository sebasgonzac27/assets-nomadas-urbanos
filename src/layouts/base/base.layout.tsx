import styles from './base.module.scss'

import React from "react";

import { Navbar } from "@/components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className={styles.base}>
      <Navbar />
      {children}
      <footer>Creado por @sebasgonzac</footer>
    </div>
  )
}
