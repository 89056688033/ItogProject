import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';

function Card() {
  return (
    <YMaps>
      <div>
        Место для путешествия
        <Map defaultState={ { center: [55.75, 37.57], zoom: 9, controls: ['zoomControl', 'fullscreenControl'], }}
    modules={['control.ZoomControl', 'control.FullscreenControl']}
  >
        <Placemark modules={['geoObject.addon.balloon']}
      defaultGeometry={[55.75, 37.57]}
      properties={{
        balloonContentBody:
          'Инфа к метке',
      }}
    />
  </Map>
      </div>
    </YMaps>
  );
}

export default Card;
