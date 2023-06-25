import { useState } from 'react';
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';
 
const mapState = { center: { coords: [55.630527, 37.849046] }, zoom: 10, controls: [] };
// interface TProps {
//   id?: number;
//   data?: string;
//   geometry?: number;
//   center?: string;
// }
 
const cities = [
  {
    id: 1,
    data: { content: 'Saint-Petersburg' },
    options: { selectOnClick: false },
    geometry: [59.93863, 30.31413]
  },
  {
    id: 2,
    data: { content: 'Dzerzhinsky' },
    options: { selectOnClick: false },
    geometry: [55.630527, 37.849046]
  },
  {
    id: 3,
    data: { content: 'Moscow' },
    options: { selectOnClick: false },
    geometry: [55.753559, 37.609218]
  }
];
const getPointData = (index: string | number) => {
  return {
    balloonContentBody: 'placemark <strong>balloon " + index + "</strong>',
    clusterCaption: 'placemark <strong>' + index + '</strong>'
  };
};
 
const getPointOptions = () => {
  return {
    preset: 'islands#violetIcon'
  };
};
 
export function Mape12() {
  const [state, setState] = useState();
 
  const onItemClick = () => {
    setState({ center: { geometry } });
  };
  return (
    <YMaps>
      <Map state={state} defaultState={ mapState }>
        <Clusterer
          options={{
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false
          }}
        >
          {cities.map((items) => (
            <Placemark
              key={items.id}
              geometry={items.geometry}
              properties={getPointData(items.id)}
              options={getPointOptions()}
            />
          ))}
        </Clusterer>
      </Map>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <button onClick={() => { onItemClick(city.geometry); }}>
              {city.data.content}
            </button>
          </li>
        ))}
      </ul>
    </YMaps>
  );
};
