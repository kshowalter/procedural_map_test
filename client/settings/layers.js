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

layers['house'] = Object.assign(Object.create(layers.base),{
  fill: '#6f82ff',
  stroke: 'none',
});

layers['property'] = Object.assign(Object.create(layers.base),{
  stroke: '#424242',
  'stroke-dasharray': '1, 1',
});

layers['road'] = Object.assign(Object.create(layers.base),{
  fill: '#9a9a9a',
});
layers['road_center'] = Object.assign(Object.create(layers.base),{
  stroke: '#424242',
  'stroke-dasharray': '2, 1',
});


export default layers;
