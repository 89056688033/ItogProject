import React from 'react';
import Mape from '../Map/Map';
import { Legenda } from '../Legenda/Legenda';

export function MainPage() {
  return (
    <div>
        <Legenda />
    <div> <h1>Карта с маршрутами для активного отдыха (можно пройти за один день)</h1><Mape /> </div>
    </div>
  );
}
