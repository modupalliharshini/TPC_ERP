'use client';

import React, { useState } from 'react';
import { 
  BarChart, 
  MessageSquare, 
  Share2, 
  Palette
} from 'lucide-react';
import styles from './page.module.css';
import ERPSection from './sections/ERPSection';
import WhatsAppSection from './sections/WhatsAppSection';
import SocialMediaSection from './sections/SocialMediaSection';
import SuperAdminHeader from '../components/SuperAdminHeader';

type DashboardTab = 'ERP' | 'Canvas' | 'Whatsapp' | 'Social Media';

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('ERP');

  const renderSection = () => {
    switch (activeTab) {
      case 'ERP':
        return <ERPSection />;
      case 'Whatsapp':
        return <WhatsAppSection />;
      case 'Social Media':
        return <SocialMediaSection />;
      case 'Canvas':
        return (
          <div className={styles.sectionContent} style={{textAlign: 'center', padding: '5rem', background: 'white', borderRadius: '20px'}}>
             <Palette size={64} color="#64748b" style={{marginBottom: '1rem'}} />
             <h2 className={styles.title} style={{fontSize: '1.5rem', color: '#64748b'}}>Canvas Integration</h2>
             <p style={{color: '#94a3b8'}}>This module is currently static and under development.</p>
          </div>
        );
      default:
        return <ERPSection />;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <SuperAdminHeader title="Super Admin" highlight="Overview" />

      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'ERP' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('ERP')}
        >
          <BarChart size={18} /> ERP
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'Canvas' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Canvas')}
        >
          <Palette size={18} /> Canvas
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'Whatsapp' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Whatsapp')}
        >
          <MessageSquare size={18} /> Whatsapp
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'Social Media' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Social Media')}
        >
          <Share2 size={18} /> Social Media
        </button>
      </div>

      <main className={styles.sectionContent}>
        {renderSection()}
      </main>
    </div>
  );
}
