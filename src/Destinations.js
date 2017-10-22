import React from 'react';
import { Row, Col, Card } from 'antd';

import Destination from './Destination';

const destinations = [
  {
    title: 'Norway Fjords',
    date: '19 — 28 October',
    people: '5 to 6 people',
    image: require('./assets/norway.jpg')
  }
];

const Destinations = () => {
  return <Row gutter={16}>
    {destinations.map(e=> 
      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
        <Destination {...e}/>
      </Col>
    )}
  </Row>;
}

export default Destinations;