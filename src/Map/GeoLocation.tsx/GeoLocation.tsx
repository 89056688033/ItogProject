import React from 'react';
import ReactDOM from 'react-dom';
import { YMaps, Map, type YMapsApi } from 'react-yandex-maps';

const getGeoLocation = async (ymaps: YMapsApi) => {
  await ymaps.geolocation
    .get({ provider: 'yandex', mapStateAutoApply: true })
    .then(async (result: { geoObjects: { position: any; }; }) => {
      await ymaps.geocode(result.geoObjects.position).then((res: { geoObjects: { get: (arg0: number) => any; }; }) => {
        const firstGeoObject = res.geoObjects.get(0);
        console.log(
          firstGeoObject.getLocalities().length
            ? firstGeoObject.getLocalities()
            : firstGeoObject.getAdministrativeAreas()
        );
      });
    }
    );
};

export const handleApiAvaliable = (ymaps: YMapsApi) => {
  const geolocation = getGeoLocation(ymaps);
};

export function GeoLocation() {
  return (
    <div>
      <YMaps>
        <Map
          state={{ center: [56.3972, 43.7987], zoom: 12 }}
          modules={['geolocation', 'geocode']}
          onLoad={ymaps => { handleApiAvaliable(ymaps); }}
        />
      </YMaps>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<GeoLocation />, rootElement);
