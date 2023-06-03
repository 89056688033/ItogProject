import React from 'react';
import Card from './Page/Page';
import Mape from './Map/Map';
import Map1 from './MapWithButton/MapWithButton';
import { Layout } from './Layout/Layouts';

function App() {
  return (
    <Layout>
  <div> Место для путешествия <Mape /> </div>
  </Layout>)
}

export default App;
