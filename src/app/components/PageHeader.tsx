'use client';

import React, { useEffect, useState } from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  titleStart: string;
  titleHighlight: string;
  actionElement?: React.ReactNode;
}

export default function PageHeader({
  titleStart,
  titleHighlight,
  actionElement,
}: PageHeaderProps) {
  const [userName, setUserName] = useState('Admin');
  const [initials, setInitials] = useState('AD');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      const namePart = savedEmail.split('@')[0];
      const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
      const derivedInitials = namePart.slice(0, 2).toUpperCase();
      
      setUserName(formattedName);
      setInitials(derivedInitials);
    }
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {titleStart} <span className={styles.titleHighlight}>{titleHighlight}</span>
      </h1>
      
      <div className={styles.actions}>
        {actionElement && <div className={styles.actionNode}>{actionElement}</div>}
        <div className={styles.userProfile}>
          <span className={styles.welcomeText}>Welcome back,</span>
          <span className={styles.userName}>{userName}</span>
        </div>
        <div className={styles.avatar}>{initials}</div>
      </div>
    </header>
  );
}
