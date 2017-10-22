import React from 'react';
import { Icon, Row, Col, Card } from 'antd';
import './css/Destination.css';

const Destination = ({ title, date, people, image }) => {
  return <Card className='destination-card' bodyStyle={{ padding: 0 }}>
    <div className='destination-image'>
      <img width='100%' src={image} />
    </div>
    <div className='destination-description'>
      <h3 className='destination-title'>{title}</h3>
      <div className='destination-people'><small>{people}</small> <Icon type='team'/></div>
      <p>{date}</p>
    </div>
  </Card>;
}

export default Destination;