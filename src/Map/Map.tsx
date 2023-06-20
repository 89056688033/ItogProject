/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  YMaps,
  Map,
  Placemark,
  Polyline,
  GeolocationControl,
  RulerControl,
  SearchControl,
  TrafficControl,
  TypeSelector,
  RouteEditor, Polygon, RouteButton,
} from 'react-yandex-maps';
import React from 'react';
import style from './Map.module.scss';
import placemarkIcon from '../assets/Dub (2).png';
import plamPrir from '../assets/LDub.png';
import Jelud from '../assets/Jelud.png';
import VolRiv from '../assets/River_Water.png';
import Beach from '../assets/Beach3.png';
import Lake from '../assets/Lake.png';
import River from '../assets/River.png';
import Beach2 from '../assets/Beach2.png';
import { handleApiAvaliable } from './GeoLocation.tsx/GeoLocation';

function Mape() {
  return (
      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
          // apikey: '53fc8636-c873-48cd-9f85-954fe7cad961',
        }}
      >
        <Map
          className={style.map}
          defaultState={{
            center: [56.3972, 43.7987],
            zoom: 12.4,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['geolocation', 'geocode', 'multiRouter.MultiRoute']}
          onLoad={(ymaps) => {
            handleApiAvaliable(ymaps);
          }}
        >
          <GeolocationControl options={{ float: 'left' }} />
          <RouteButton options={{ float: 'right' }} />
          <RulerControl className={style.floatright} />
          <SearchControl className={style.floatright} />
          <TrafficControl className={style.floatright} />
          <RouteEditor />
          <TypeSelector className={style.floatright} />
          {/* <RoutePanel options={{ float: 'right' }} /> */}
          {/* <Panorama defaultPoint={[56.3972, 43.7987]} /> */}
          <Placemark
            geometry={[56.3928, 43.8607]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: Beach2,
              iconImageSize: [32, 32],
            }}
            properties={{
              hintContent: 'Пляж',
              balloonContent:
                'Пляж',
            }}
          />
          <Placemark
            geometry={[56.3989, 43.7929]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: Lake,
              iconImageSize: [32, 32],
              iconImageOffset: [-3, -42]
            }}
            properties={{
              hintContent: 'Берег Волги',
              balloonContent: 'Озеро в дубовом лесу',
            }}
          />
          <Placemark
            geometry={[56.4250, 43.7281]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: River,
              iconImageSize: [32, 32],
              // iconImageOffset: [-3, -42]
            }}
            properties={{
              hintContent: 'Река Пыра',
              balloonContent: 'Река Пыра впадает в Волгу, есть пляж для купания',
            }}
          />
          <Placemark
            geometry={[56.4185, 43.815]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: Beach,
              iconImageSize: [32, 32],
              iconImageOffset: [-3, -42]
            }}
            properties={{
              hintContent: 'Берег Волги',
              balloonContent:
                'Вся северная часть о.Ревякского представляет собой полосу из чистого песка',
            }}
          />
          <Placemark
            defaultGeometry={[56.33, 44.0]}
            properties={{
              balloonContentBody:
                'Нижний Новгород был основан в 1221 году у места слияния великих русских рек – Волги и Оки князем Юрием (Георгием) Всеволодовичем как опорный пункт обороны русских границ от мордвы, черемисов и татар. Город получил название «Нижний», как предполагают историки, из-за расположения в «низовских» землях относительно Новгорода Великого.',
            }}
          />
          <Polygon
            geometry={[
              [
                [56.411, 43.7703],
                [56.4099, 43.7743],
                [56.4094, 43.778],
                [56.4052, 43.7784],
                [56.4097, 43.7682],
              ],
            ]}
            options={{
              fillColor: '#00FF00',
              strokeColor: '#0000FF',
              opacity: 0.5,
              strokeWidth: 5,
              strokeStyle: 'shortdash',
            }}
          />
          <Polygon
            geometry={[
              [
                [56.3935, 43.7928],
                [56.3946, 43.7912],
                [56.3957, 43.7983],
                [56.3983, 43.806],
                [56.3981, 43.8119],
                [56.3965, 43.8158],
                [56.3917, 43.8007],
                [56.393, 43.7966],
              ],
            ]}
            options={{
              fillColor: '#00FF00',
              strokeColor: '#0000FF',
              opacity: 0.5,
              strokeWidth: 5,
              strokeStyle: 'shortdash',
            }}
          />
          <Polygon
            geometry={[
              [
                [56.3849, 43.8371],
                [56.3847, 43.8370],
                [56.3843, 43.8364],
                [56.3842, 43.8363],
                [56.3823, 43.8341],
                [56.3821, 43.8342],
                [56.3820, 43.8343],
                [56.3797, 43.8376],
                [56.3797, 43.8378],
                [56.3791, 43.8389],
                [56.3788, 43.8397],
                [56.3785, 43.8388],
                [56.3785, 43.8383],
                [56.3787, 43.8378],
                [56.3787, 43.8375],
                [56.3785, 43.8375],
                [56.3779, 43.8382],
                [56.3778, 43.8381],
                [56.3781, 43.8373],
                [56.3781, 43.8369],
                [56.3779, 43.8368],
                [56.3778, 43.8364],
                [56.3781, 43.8356],
                [56.3780, 43.8354],
                [56.3775, 43.8349],
                [56.3740, 43.8379],
                [56.3704, 43.8443],
                [56.3704, 43.8446],
                [56.3727, 43.8532],
                [56.3727, 43.8532],
                [56.3727, 43.8534],
                [56.3726, 43.8537],
                [56.3737, 43.8572],
                [56.3741, 43.8578],
                [56.3746, 43.8595],
                [56.3747, 43.8596],
                [56.3748, 43.8595],
                [56.3756, 43.8554],
                [56.3755, 43.8554],
                [56.3755, 43.8552],
                [56.3769, 43.8531],
                [56.3774, 43.8527],
                [56.3778, 43.8525],
                [56.3778, 43.8524],
                [56.3781, 43.8516],
                [56.3781, 43.8514],
                [56.3780, 43.8513],
                [56.3779, 43.8513],
                [56.3779, 43.8512],
                [56.3779, 43.8510],
                [56.3783, 43.8496],
                [56.3799, 43.8488],
                [56.3800, 43.8485],
                [56.3802, 43.8472],
                [56.3803, 43.8461],
                [56.3803, 43.8457],
                [56.3811, 43.8445],
                [56.3811, 43.8437],
                [56.3812, 43.8433],
              ],
            ]}
            options={{
              fillColor: '#00FF00',
              strokeColor: '#0000FF',
              opacity: 0.5,
              strokeWidth: 5,
              strokeStyle: 'shortdash',
            }}
          />
          <Placemark
            geometry={[56.4077, 43.7742]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: Jelud,
              iconImageSize: [32, 32],
              // iconImageOffset: [-3, -42]
            }}
            properties={{
              hintContent: 'Дубовый лес',
              balloonContent: 'Дубовый лес у берега Никольского рукава',
            }}
          />
          <Placemark
            geometry={[56.3954, 43.803]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: placemarkIcon,
              iconImageSize: [42, 42],
              iconImageOffset: [-3, -42]
            }}
            properties={{
              hintContent: 'Дубрава',
              balloonContent: 'Дубрава у озера Лунского',
            }}
          />
          <Placemark
            geometry={[56.3772, 43.8447]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: plamPrir,
              iconImageSize: [42, 42],
              iconImageOffset: [-3, -42],
            }}
            properties={{
              hintContent: 'Памятник природы регионального значения Копосовская дубрава',
              balloonContent:
                'Памятник природы регионального значения Копосовская дубрава. Представляет собой массив естественного широколиственного леса у п. Копосово в Сормовском районе. Копосовская дубрава отличается однородным составом древостоя. Она сложена одной древесной породой - дубом, без участия липы, клена, вяза, ясеня, так типичных для дубрав области, хотя в подросте эти породы в отдельных местах Копосовской дубравы встречаются. Эта дубрава - одна из самых старых пойменных дубрав Нижегородской области. Дуб здесь имеет возраст не менее 200 - 250 лет, достигает высоты 20 - 25 м и диаметра ствола от 40 до 80 см. ',
            }}
          />
          <Polyline
            geometry={[
              [56.412, 43.7288],
              [56.412, 43.7306],
              [56.4147, 43.7319],
              [56.416, 43.732],
              [56.4165, 43.7334],
              [56.4195, 43.7325],
              [56.4221, 43.7274],
              [56.4235, 43.7273],
              [56.4247, 43.7269],
              [56.4249, 43.7276],
              [56.4212, 43.7368],
            ]}
            options={{
              balloonCloseButton: true,
              strokeColor: '#000',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
            properties={{
              hintContent: 'река Пыра',
              balloonContent: 'Маршрут вдоль лугов и берега реки Пыра',
            }}
          />
          <Polyline
            geometry={[
              [56.4212, 43.7368],
              [56.4221, 43.7387],
              [56.4211, 43.7453],
              [56.4204, 43.7473],
              [56.4169, 43.7541],
              [56.4147, 43.7594],
              [56.412, 43.77],
              [56.4103, 43.7753],
              [56.4102, 43.777],
            ]}
            options={{
              balloonCloseButton: true,
              strokeColor: '#1F75FE',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
            properties={{
              hintContent: 'Волга',
              balloonContent: 'Маршрут по о. Ревякинский, вдоль берега Волги',
            }}
          />
          <Polyline
            geometry={[
              [56.4212, 43.7368],
              [56.4185, 43.7453],
              [56.4173, 43.7497],
              [56.4146, 43.7552],
              [56.4111, 43.7685],
              [56.4093, 43.7763],
              [56.409, 43.7782],
              [56.4075, 43.7858],
              [56.4071, 43.7887],
              [56.4053, 43.7943],
              [56.4036, 43.793],
              [56.4036, 43.7943],
              [56.4031, 43.7966],
              [56.4015, 43.8027],
              [56.4004, 43.8009],
              [56.3997, 43.801],
              [56.3986, 43.7996],
              [56.3986, 43.7984],
              [56.3983, 43.7981],
              [56.3983, 43.7937],
              [56.3978, 43.7879],
              [56.3985, 43.7813],
              [56.3992, 43.7781],
              [56.3969, 43.775],
              [56.3966, 43.7743],
              [56.3929, 43.7716],
              [56.3895, 43.7745],
              [56.3872, 43.773],
            ]}
            options={{
              balloonCloseButton: true,
              strokeColor: '#A62F00',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
            properties={{
              hintContent: 'Никольский рукав',
              balloonContent: 'Маршрут вдоль Никольского рукава, через дубраву и луга ',
            }}
          />
          <Polyline
            geometry={[
              [56.412, 43.7702],
              [56.412, 43.778],
              [56.4127, 43.7862],
              [56.4171, 43.7952],
              [56.417, 43.7969],
              [56.4168, 43.7975],
              [56.4168, 43.7975],
              [56.4177, 43.7972],
              [56.4183, 43.8029],
              [56.4168, 43.81],
              [56.416, 43.8137],
              [56.4186, 43.8165],
              [56.416, 43.8137],
              [56.4156, 43.8143],
              [56.4139, 43.8143],
              [56.4123, 43.81223],
              [56.412, 43.8093],
              [56.4113, 43.809],
              [56.41, 43.8118],
              [56.408, 43.8143],
              [56.4073, 43.816],
              [56.4063, 43.8163],
              [56.4052, 43.8179],
              [56.405, 43.8185],
              [56.4047, 43.8188],
              [56.4038, 43.8195],
              [56.4035, 43.8198],
              [56.4034, 43.8203],
              [56.4027, 43.8206],
              [56.4017, 43.8214],
              [56.4013, 43.8223],
              [56.401, 43.8237],
              [56.4009, 43.8239],
              [56.4001, 43.824],
              [56.4, 43.8243],
              [56.3996, 43.8245],
              [56.3993, 43.8245],
              [56.399, 43.8247],
              [56.3987, 43.8253],
              [56.3984, 43.8259],
              [56.3979, 43.8265],
              [56.3977, 43.8271],
              [56.3972, 43.8275],
              [56.397, 43.8275],
              [56.3958, 43.828],
              [56.3955, 43.8283],
              [56.3951, 43.8284],
              [56.3949, 43.8288],
              [56.3947, 43.829],
              [56.3946, 43.8291],
              [56.3943, 43.8292],
              [56.394, 43.8295],
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
              balloonCloseButton: true,
              strokeColor: '#F93446',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
            properties={{
              hintContent: 'о. Ревякинский',
              balloonContent: 'Маршрут по о. Ревякинский,дорога была, после переправы по мосту с острова на велосипедах или пешком (выезд для машин перекрыт шлагбаумом). Дорога для машин отмечена коричневым цветом.',
            }}
          />
          <Polyline
            geometry={[
              [56.4, 43.8243],
              [56.4, 43.8245],
              [56.4011, 43.8295],
              [56.4011, 43.8314],
              [56.4009, 43.833],
              [56.4011, 43.8353],
              [56.4012, 43.8362],
              [56.4013, 43.8375],
              [56.4014, 43.8393],
              [56.4014, 43.8408],
              [56.4011, 43.8423],
              [56.3988, 43.8454],
              [56.396, 43.848],
              [56.3953, 43.8484],
              [56.3898, 43.8424],
              [56.3857, 43.8404],
              [56.3846, 43.837],
              [56.3811, 43.8336],
              [56.3805, 43.8326],
              [56.3803, 43.8316],
            ]}
            options={{
              balloonCloseButton: true,
              strokeColor: '#F97E34',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
            properties={{
              hintContent: 'Никольский рукав',
              balloonContent: 'Маршрутyт на машине от о. Ревякинский',
            }}
          />
          <Polyline
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
              balloonCloseButton: true,
              strokeColor: '#3450F9',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
            properties={{
              hintContent: 'Пляж',
              balloonContent: 'Дорога на пляж реки Волги',
            }}
          />
        </Map>
      </YMaps>
  );
}

export default Mape;
