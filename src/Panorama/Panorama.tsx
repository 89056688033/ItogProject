import { YMaps, Map, Placemark, Panorama } from '@pbe/react-yandex-maps';
import React from 'react';
import { render } from '@testing-library/react';

const Application = () => <YMaps query={{ lang: 'en_RU' }}>Application with YMaps Provider</YMaps>;
render(<Application />);

// Этот компонент используется для обеспечения компонентов YMaps контекстом API Яндекс.Карт. Вам всегда нужно добавлять этот компонент где-то над вашими картами в дереве компонентов.

export function Panoram() {
    return (
        <YMaps>
  <Panorama defaultPoint={[55.733685, 37.588264]} />
</YMaps>);}