import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layouts.module.scss';

interface TProps {
  children: JSX.Element;
}

export const Layout = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
