import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Test = ({ rating }) => {
  const ref = useRef();

  useEffect(() => {
    d3.select(ref.current).selectAll('*').remove();

    const width = 300;
    const height = 300;
    const margin = 10;
    const needleWidth = 10;
    const needleHeight = width / 2 - margin;

    const innerWidth = width - 2 * margin;
    const innerHeight = height - 2 * margin;

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', '-50%')
      .attr('x2', '50%')
      .attr('y1', '0%')
      .attr('y2', '0%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FF0000'); // Equivalent to rgb(255,0,0)

    gradient
      .append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#FF8F00'); // Equivalent to rgba(255,143,0,1)

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#31FB05');

    const arc = d3
      .arc()
      .innerRadius(innerWidth / 2 - margin)
      .outerRadius(innerWidth / 2 - margin / 2)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    svg
      .append('path')
      .attr('d', arc())
      .attr('fill', 'url(#gradient)');

    // Draw needle
    const rotate = d3
      .scaleLinear()
      .domain([0, 100])
      .range([-90, 90]);

    const needleLength = innerWidth / 2 - margin;
    const needleRadius = 5; // radius of the needle circle
    const needlePath = `M 0 ${-needleLength} L ${-needleRadius} ${-needleRadius} A ${needleRadius} ${needleRadius} 0 0 1 ${needleRadius} ${-needleRadius} Z`;

    const needle = svg
      .append('path')
      .attr('d', needlePath)
      .attr('fill', 'black')
      .attr('transform', `translate(0, ${needleRadius}) rotate(${rotate(rating)})`);
  }, [rating]);

  return <div ref={ref} />;
};

export default Test;
