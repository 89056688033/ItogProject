import {
  YMaps,
  Map,
  Placemark,
  Panorama,
  GeolocationControl,
  RouteButton,
  RulerControl, SearchControl, TrafficControl, TypeSelector, RouteEditor
} from '@pbe/react-yandex-maps';
import React from 'react';
import style from './Map.module.scss';
import { render } from '@testing-library/react';

const Application = () => <YMaps query={{ lang: 'en_RU' }}>Application with YMaps Provider</YMaps>;
render(<Application />);

// Этот компонент используется для обеспечения компонентов YMaps контекстом API Яндекс.Карт. Вам всегда нужно добавлять этот компонент где-то над вашими картами в дереве компонентов.

function Mape() {
  return (
    <YMaps
      query={{
        ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      }}
    >
      <Map
        className={style.map}
        defaultState={{
          center: [56.19, 44.00],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
      >
        <GeolocationControl options={{ float: 'left' }} />
        <RouteButton options={{ float: 'right' }} />
        <RulerControl className={style.floatright} />
        <SearchControl className={style.floatright} />
        <TrafficControl className={style.floatright} />
        <RouteEditor />
        <TypeSelector className={style.floatright} />
        <Panorama defaultPoint={[55.733685, 37.588264]} />
        <Placemark
          defaultGeometry={[56.33, 44.00]}
          properties={{
            balloonContentBody: 'Нижний Новгород был основан в 1221 году у места слияния великих русских рек – Волги и Оки князем Юрием (Георгием) Всеволодовичем как опорный пункт обороны русских границ от мордвы, черемисов и татар. Город получил название «Нижний», как предполагают историки, из-за расположения в «низовских» землях относительно Новгорода Великого.',
          }}
        />
      </Map>
    </YMaps>
  );
}

export default Mape;
