import React from 'react';
import style from './Legenda.module.scss'

export function Legenda () {
  return (
    < >
    <h1 className={style.title}> Обозначение маршрутов</h1>
    <body className={style.container}>
    <div className={style.rectangle} /><textarea className={style.textarea}>Маршрут вдоль берега реки Пыра, до ее устья и осторова Ревякинский</textarea><div />
    <div className={style.rectangle1} /><textarea className={style.textarea}>Маршрут по острову Ревякинский вдоль берега Волги</textarea><div />
    <div className={style.rectangle2} /><textarea className={style.textarea}>Маршрут через дубраву вдоль Никольского рукава, озеро Муруново</textarea><div />
    <div className={style.rectangle3} /><textarea className={style.textarea}>Маршрут вдоль берега Волги, дорога была </textarea><div />
    <div className={style.rectangle4} /><textarea className={style.textarea}>Маршрут для проезда на машине</textarea><div />
    <div className={style.rectangle5} /><textarea className={style.textarea}>Маршрут до пляжа</textarea><div />
    </body>
    </>);
}
