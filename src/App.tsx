import React from 'react';
import { Layout } from './Layout/Layouts';
import { MainPage } from './MainPage/MainPage';
import { GeoLocation } from './Map/GeoLocation.tsx/GeoLocation';

function App() {
  return (
    <div >
      <Layout>
      <MainPage />
      </Layout>
    </div>
  );
}

export default App;
