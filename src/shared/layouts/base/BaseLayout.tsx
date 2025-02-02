import { Navbar } from '@/shared/components';
import React from 'react';
import styles from './BaseLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Readonly<Props>) {
  return (
    <div className={styles.base}>
      <Navbar />
      {children}
    </div>
  );
}
