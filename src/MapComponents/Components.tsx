import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Map1() {
  const [zoom, setZoom] = React.useState(9);
  const mapState = React.useMemo(() => ({ center: [55.75, 37.57], zoom }), [zoom]);

  return (
    <YMaps>
      <>
        <table>
          <tbody>
            <tr>
              <th>Controlled Map</th>
              <th>Uncontrolled Map</th>
            </tr>
            <tr>
              <td>
                <Map state={mapState} />
              </td>
              <td>
                <Map defaultState={mapState} />
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <button onClick={() => { setZoom((zoom) => (zoom === 9 ? 12 : 9)); }}>Toggle map zoom</button>
        </p>
      </>
    </YMaps>
  );
}
