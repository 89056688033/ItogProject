import {
  YMaps,
  Map,
  Placemark, Rectangle,
  Panorama, Polyline,
  GeolocationControl,
  RouteButton, Circle,
  RulerControl, SearchControl, TrafficControl, TypeSelector, RouteEditor
} from 'react-yandex-maps';
import React from 'react';
import style from './Map.module.scss';
import { render } from '@testing-library/react';
import bk from '../assets/book.png'

// const Application = () => <YMaps query={{ lang: 'en_RU' }}>Application with YMaps Provider</YMaps>;
// render(<Application />);

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
          defaultGeometry={[56.4221, 43.7384]}
          properties={{
            balloonContentBody: 'Берег Волги. Очень красивые виды, природа корабли, песочные пляжи. Весной и осенью дорога затоплена.',
          }} />
          <Placemark
          defaultGeometry={[56.4221, 43.7384]}
          properties={{
            balloonContentBody: 'Берег Волги. Очень красивые виды, природа корабли, песочные пляжи. Весной и осенью дорога через никольский рукав затоплена.',
          }} />
          <Placemark
          defaultGeometry={[56.33, 44.00]}
          properties={{
            balloonContentBody: 'Нижний Новгород был основан в 1221 году у места слияния великих русских рек – Волги и Оки князем Юрием (Георгием) Всеволодовичем как опорный пункт обороны русских границ от мордвы, черемисов и татар. Город получил название «Нижний», как предполагают историки, из-за расположения в «низовских» землях относительно Новгорода Великого.',
          }} />
          <Circle geometry={[[56.3809, 43.8503], 1010]}
          options={{
            draggable: false,
            fillColor: '#DB709377',
            strokeColor: '#1CAC78',
            strokeOpacity: 0.8,
            strokeWidth: 5,
          }}
    />
     <Circle geometry={[[56.3954, 43.8030], 300]}
          options={{
            draggable: false,
            fillColor: '#DB709377',
            strokeColor: '#1CAC78',
            strokeOpacity: 0.8,
            strokeWidth: 5,
          }}
    />
    <Rectangle
      geometry={[
        [56.4064, 43.7760],
        // [56.4089, 43.7766],
        // [56.4105, 43.7698],
        [56.4098, 43.7684],
      ]}
      options={{
        draggable: false,
        fillColor: '#ffff0022',
        strokeColor: '#3caa3c88',
        strokeWidth: 7,
      }}
    />
     <Polyline
            geometry={[
              [56.4120, 43.7288],
              [56.4120, 43.7306],
              [56.4147, 43.7319],
              [56.4160, 43.7320],
              [56.4165, 43.7334],
              [56.4195, 43.7325],
              [56.4221, 43.7274],
              [56.4235, 43.7273],
              [56.4247, 43.7269],
              [56.4249, 43.7276],
              [56.4212, 43.7368],
            ]}
            options={{
              balloonCloseButton: false,
              strokeColor: '#000',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }} /><Polyline
                geometry={[
                  [56.4212, 43.7368],
                  [56.4221, 43.7387],
                  [56.4211, 43.7453],
                  [56.4204, 43.7473],
                  [56.4169, 43.7541],
                  [56.4147, 43.7594],
                  [56.4120, 43.7700],
                  [56.4103, 43.7753],
                  [56.4102, 43.7770],
                ]}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#1F75FE',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }} /><Polyline
                geometry={[
                  [56.4212, 43.7368],
                  [56.4185, 43.7453],
                  [56.4173, 43.7497],
                  [56.4146, 43.7552],
                  [56.4111, 43.7685],
                  [56.4093, 43.7763],
                  [56.4090, 43.7782],
                  [56.4075, 43.7858],
                  [56.4071, 43.7887],
                  [56.4053, 43.7943],
                  [56.4036, 43.7930],
                  [56.4036, 43.7943],
                  [56.4031, 43.7966],
                  [56.4015, 43.8027],
                  [56.4004, 43.8009],
                  [56.3997, 43.8010],
                  [56.3986, 43.7996],
                  [56.3986, 43.7984],
                  [56.3983, 43.7981],
                  [56.3983, 43.7937],
                  [56.3978, 43.7879],
                  [56.3985, 43.7813],
                  [56.3992, 43.7781],
                  [56.3969, 43.7750],
                  [56.3966, 43.7743],
                  [56.3929, 43.7716],
                  [56.3895, 43.7745],
                  [56.3872, 43.7730],
                ]}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#000',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }} /><Polyline
                geometry={[
                  [56.4120, 43.7702],
                  [56.4120, 43.7780],
                  [56.4127, 43.7862],
                  [56.4171, 43.7952],
                  [56.4170, 43.7969],
                  [56.4168, 43.7975],
                  [56.4168, 43.7975],
                  [56.4177, 43.7972],
                  [56.4183, 43.8029],
                  [56.4168, 43.8100],
                  [56.4160, 43.8137],
                  [56.4186, 43.8165],
                  [56.4160, 43.8137],
                  [56.4156, 43.8143],
                  [56.4139, 43.8143],
                  [56.4123, 43.81223],
                  [56.4120, 43.8093],
                  [56.4113, 43.8090],
                  [56.4100, 43.8118],
                  [56.4080, 43.8143],
                  [56.4073, 43.8160],
                  [56.4063, 43.8163],
                  [56.4052, 43.8179],
                  [56.4050, 43.8185],
                  [56.4047, 43.8188],
                  [56.4038, 43.8195],
                  [56.4035, 43.8198],
                  [56.4034, 43.8203],
                  [56.4027, 43.8206],
                  [56.4017, 43.8214],
                  [56.4013, 43.8223],
                  [56.4010, 43.8237],
                  [56.4009, 43.8239],
                  [56.4001, 43.8240],
                  [56.4000, 43.8243],
                  [56.3996, 43.8245],
                  [56.3993, 43.8245],
                  [56.3990, 43.8247],
                  [56.3987, 43.8253],
                  [56.3984, 43.8259],
                  [56.3979, 43.8265],
                  [56.3977, 43.8271],
                  [56.3972, 43.8275],
                  [56.3970, 43.8275],
                  [56.3958, 43.8280],
                  [56.3955, 43.8283],
                  [56.3951, 43.8284],
                  [56.3949, 43.8288],
                  [56.3947, 43.8290],
                  [56.3946, 43.8291],
                  [56.3943, 43.8292],
                  [56.3940, 43.8295],
                  [56.3931, 43.8315],
                  [56.3912, 43.8335],
                  [56.3902, 43.8344],
                  [56.3899, 43.8344],
                  [56.3886, 43.8358],
                  [56.3875, 43.8366],
                  [56.3867, 43.8369],
                  [56.3865, 43.8371],
                  [56.3858, 43.8368],
                  [56.3849, 43.8375],
                ]}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#F93446',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }} />
                <Polyline
                geometry={[
                  [56.4000, 43.8243],
                  [56.4000, 43.8245],
                  [56.4011, 43.8295],
                  [56.4011, 43.8314],
                  [56.4009, 43.8330],
                  [56.4011, 43.8353],
                  [56.4012, 43.8362],
                  [56.4013, 43.8375],
                  [56.4014, 43.8393],
                  [56.4014, 43.8408],
                  [56.4011, 43.8423],
                  [56.3988, 43.8454],
                  [56.3960, 43.8480],
                  [56.3953, 43.8484],
                  [56.3898, 43.8424],
                  [56.3857, 43.8404],
                  [56.3846, 43.8370],
                  [56.3811, 43.8336],
                  [56.3805, 43.8326],
                  [56.3803, 43.8316],
                ]}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#F97E34',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }} /><Polyline
                geometry={[
                  [56.3953, 43.8484],
                  [56.3957, 43.8499],
                  [56.3957, 43.8521],
                  [56.3962, 43.8537],
                  [56.3957, 43.8548],
                  [56.3923, 43.8587],
                  [56.3924, 43.8602],
                ]}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#3450F9',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }} />
      </Map>
    </YMaps>
  );
}

export default Mape;
