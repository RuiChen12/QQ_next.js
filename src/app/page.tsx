'use client';

import 'bootstrap/dist/css/bootstrap.min.css';

import QQNavbar from '../components/QQNavbar';
import QQMainSection from '../components/QQMainSection';
import QQFooter from '../components/QQFooter';

export default function Home() {
  return (
    <main>
      <QQNavbar />
      <QQMainSection />
      <QQFooter />
    </main>
  );
}
