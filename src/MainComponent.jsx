import React from 'react';
import GaugeHeading from './GaugeHeading';
import Test from './test';

const GaugeBlock = ({ text, rating }) => {
  return (
    <div>
      <GaugeHeading text={text} rating={rating} />
      <Test rating={rating} />
    </div>
  );
};

const MainComponent = () => {
  // For simplicity, I'm just using the same text and rating for all the gauges.
  // In a real application, you'd probably want to pass in different values.
  const data = [
    { text: 'Gauge 1', rating: 50 },
    { text: 'Gauge 2', rating: 75 },
    { text: 'Gauge 3', rating: 25 },
    { text: 'Gauge 4', rating: 100 },
    { text: 'Gauge 5', rating: 60 },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '10px'
    }}>
      {data.map((item, index) => (
        <GaugeBlock key={index} text={item.text} rating={item.rating} />
      ))}
    </div>
  );
};

export default MainComponent;
