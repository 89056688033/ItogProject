import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layouts';
import { MainPage } from './MainPage/MainPage';
import { GeoLocation } from './Map/GeoLocation.tsx/GeoLocation';
import { routes } from './utils/constants/routes';
import { Cbor } from './Info/cbor';
import { Poterya } from './Info/Poterya';
import { Mape12 } from './Map/Map2';

function App() {
  return (
    <div >
      {/* <Layout>
      <Routes>
      <Route path={routes.MAIN} element={<MainPage />}/>
      <Route path={routes.CBOR} element={<Cbor />} />
      <Route path={routes.POTERYA} element={<Poterya />} />
      </Routes>
      </Layout> */}
      <Mape12 />
    </div>
  );
}

export default App;
