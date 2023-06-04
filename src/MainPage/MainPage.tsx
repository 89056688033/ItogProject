import React from 'react';
import Mape from '../Map/Map';
import { Legenda } from '../Legenda/Legenda';

export function MainPage() {
  return (
    <div>
        <Legenda />
    <div> Место для путешествия <Mape /> </div>
    </div>
  );
}
