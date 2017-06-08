var layers = {
  base: {
    'fill': 'none',
    'stroke': '#000000',
    'stroke-width': '1px',
    'stroke-linecap': 'butt',
    'stroke-linejoin': 'miter',
    'stroke-opacity': 1
  }
};

layers['water'] = Object.assign(Object.create(layers.base),{
  fill: '#A3CCFF',
  stroke: 'none',
});

layers['ground'] = Object.assign(Object.create(layers.base),{
  fill: '#EAEAEA',
  stroke: 'none',
});

layers['house'] = Object.assign(Object.create(layers.base),{
  fill: '#F2F2F2',
  stroke: '#d4d3d3',
});

layers['property'] = Object.assign(Object.create(layers.base),{
  stroke: '#b3b3b3',
  'stroke-width': '0.5px',
  'stroke-dasharray': '2, 2',
});

layers['district'] = Object.assign(Object.create(layers.base),{
  stroke: '#888686',
  'stroke-width': '1px',
  'stroke-dasharray': '2, 2',
});

layers['road'] = Object.assign(Object.create(layers.base),{
  stroke: 'none',
  fill: '#FFFFFF',
});

layers['intersection'] = Object.assign(Object.create(layers.base),{
  stroke: 'none',
  fill: '#FFFFFF',
});
layers['road_center'] = Object.assign(Object.create(layers.base),{
  stroke: '#424242',
  'stroke-dasharray': '2, 1',
});

layers['park'] = Object.assign(Object.create(layers.base),{
  stroke: 'none',
  fill: '#CBE6A3',
});


export default layers;
