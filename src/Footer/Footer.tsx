import React from 'react';
import classes from './Footer.module.scss';
import img from '../assets/GerbNN.png';
import { routes } from '../utils/constants/routes';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <img className={classes.footer__img} src={img} alt="" />
      </div>
      <div className={classes.footer__menuWrap}>
        <div className={classes.footer__menu}>
          <div className={classes.footer__menu__title}>
            Природа Сормово
            <br />
            и его пригорода
          </div>
          <div className={classes.footer__menu__list}>
          <p> Авторское право © 2023. Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  );
};
