import React from 'react';
import classes from './Footer.module.scss';
import img from '../assets/GerbNN.png';
import { routes } from '../utils/constants/routes';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
      <Link to={routes.MAIN}><img className={classes.footer__img} src={img} alt="" /></Link>
      </div>
      <div className={classes.footer__menuWrap}>
        <div className={classes.footer__menu}>
        <Link className={classes.footer__menu__title} to={routes.MAIN}><div>
            Природа Сормово
            <br />
            и пригорода
          </div>
          </Link>
          <div className={classes.footer__menu__list}>
          <p className={classes.footer__menu__list}> Авторское право © 2023. Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  );
};
