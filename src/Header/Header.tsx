import React from 'react';
import classes from './Header.module.scss';
import img from '../assets/GerbNN.png';
import { routes } from '../utils/constants/routes';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={classes.header}>
      <div>
      <Link to={routes.MAIN}> <img className={classes.header__img} src={img} alt="" /></Link>
      </div>
      <div className={classes.header__menuWrap}>
        <div className={classes.header__menu}>
        <Link className={classes.header__menu__title} to ={routes.MAIN}><div className={classes.header__menu__title}>
            Природа Сормово
            <br />
            и  пригорода
          </div>
          </Link>
          <div className={classes.header__menu__list}>
            <Link className={classes.header__menu__list} to={routes.CBOR}>Как собраться в однодневный поход</Link>
            <Link className={classes.header__menu__list} to={routes.POTERYA}>Что делать если Вы потерялись</Link>
          </div>
        </div>
      </div>
  </div>
  );
};
