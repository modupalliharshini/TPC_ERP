"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCheck, UserCog, Users, GraduationCap } from 'lucide-react';
import styles from './ViewSwitcher.module.css';

const VIEW_ITEMS = [
  { name: 'Super Admin View', path: '#', icon: UserCog, id: 'super-admin' },
  { name: 'Admin View', path: '/dashboard', icon: UserCheck, id: 'admin' },
  { name: 'Faculty View', path: '/faculty', icon: Users, id: 'faculty' },
  { name: 'Student View', path: '#', icon: GraduationCap, id: 'student' },
];

export default function ViewSwitcher() {
  const pathname = usePathname();

  return (
    <div className={styles.switcherContainer}>
      {VIEW_ITEMS.map((item) => {
        // Active logic: Admin for /dashboard, Faculty for /faculty
        const isActive = (item.id === 'admin' && (pathname === '/dashboard' || pathname.startsWith('/dashboard/'))) ||
                         (item.id === 'faculty' && (pathname === '/faculty' || pathname.startsWith('/faculty/')));
        
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.path}
            className={`${styles.viewBtn} ${isActive ? styles.active : ''}`}
          >
            <Icon size={18} className={styles.icon} />
            <span className={styles.name}>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
