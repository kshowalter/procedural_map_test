import mkDrawing from 'mkDrawing';
import geometry from 'geometry';
import Chance from 'chance';
import fonts from './settings/fonts';
import layer_attr from './settings/layers';
import map_settings from './settings/settings';

var size = map_settings.size;
var loc = map_settings.loc;

import grid_city_1 from './map/grid_city_1/grid_city_1';

export default function(state){
  var seed = state.seed || 'pholow';
  map_settings.chance = new Chance(seed);
  map_settings.fonts = fonts;
  map_settings.layer_attr = layer_attr;

  var d = mkDrawing({
    size: state.ui.view_size,
    center: state.ui.center,
    scale: state.ui.scale,
    fonts: map_settings.fonts,
    layer_attr: map_settings.layer_attr,
  });


  var x,y,w,h;

  x = loc.city_center[0];
  y = loc.city_center[1];
  d.append( grid_city_1([x,y], map_settings) );



  /*
  x = loc.city_center[0];
  y = loc.city_center[1];
  p1 = [x, y];
  p2 = [x+size.grid_city_1.city_section[0]+road_width, y];
  p3 = [x, y+size.grid_city_1.city_section[0]+road_width];
  road(d,1,p1,p2);
  road(d,1,p1,p3);
  */


  /////////////////////
  // center

  x = loc.city_center[0];
  y = loc.city_center[1];
  d.circ([x,y],3,'base');
  d.circ([x,y],5,'base');
  d.circ([x,y],7,'base');
  d.circ([x,y],9,'base');

  return d;
}
