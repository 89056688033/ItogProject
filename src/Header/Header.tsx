import React, { useState } from 'react';
import classes from './Header.module.scss';
import img from '../assets/GerbNN.png';
// import Poterya from '../assets/Poterya8.png';
import { routes } from '../utils/constants/routes';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className={classes.header}>
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
          {/* <ul className ={ nav ? [classes.header__menu__list, classes.active].join(' ') : [classes.header__menu__list]}>
          <li> <a href="Link to={routes.CBOR}">Как собраться в однодневный поход</a></li>
          <li><Link className={classes.header__menu__list} to={routes.POTERYA}>Что делать если Вы потерялись</Link></li>
          </ul>
          <div onClick={() => { setNav(!nav); }} className={classes.mobile_btn}>
            {nav ? <AiOutlineClose size={45} /> : <AiOutlineMenu size={45} />}
          </div> */}
          <ul
            className={
              nav ? [classes.menu, classes.active].join(' ') : [classes.menu]
            }
          >
            <li className={classes.li1}>
            <Link className={classes.header__menu__list} to={routes.CBOR}>Как собраться в однодневный поход</Link>
            </li>
            <li className={classes.li2}>
            <Link className={classes.header__menu__list} to={routes.POTERYA}>Что делать если Вы потерялись</Link>
            </li>
          </ul>
          <div onClick={() => { setNav(!nav); }} className={classes.mobile_btn}>
            {nav ? <AiOutlineClose size={60} /> : <AiOutlineMenu size={60} />}
          </div>
          </div>
          </div>
  </nav>
  );
};
