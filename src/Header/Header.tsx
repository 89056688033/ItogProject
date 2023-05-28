import React from 'react';
import classes from './Header.module.scss';
import img from '../assets/GerbNN.png';
import { routes } from '../utils/constants/routes';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <img className={classes.header__img} src={img} alt="" />
      </div>
      <div className={classes.header__menuWrap}>
        <div className={classes.header__menu}>
          <div className={classes.header__menu__title}>
            Природа Сормово
            <br />
            и его пригорода
          </div>
          <div className={classes.header__menu__list}>
            <Link to={`${routes.CARD}`}>Другая карта</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
