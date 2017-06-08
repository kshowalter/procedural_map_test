import mkDrawing from 'mkDrawing';

import section_suburb from './section_suburb';
import road from '../road';

export default function(location, quad, map_settings){

  var size = map_settings.size;
  var loc = map_settings.loc;
  var center_x = location[0];
  var center_y = location[1];

  var x,y;
  var offset_x,offset_y;

  var d = mkDrawing({
    fonts: map_settings.fonts,
    layer_attr: map_settings.layer_attr,
  });

  x = center_x;
  y = center_y;

  var p1,p2;
  var n = 6;


  x = center_x;
  y = center_y;

  // N-S roads
  f.range(n+1).forEach(function(c){
    offset_x = quad[0] * size.grid_city_1.city_section[0] * c;
    offset_y = quad[1] * size.grid_city_1.city_section[1] * n;
    p1 = [x+offset_x, y];
    p2 = [x+offset_x, y+offset_y];
    road(d,1,p1,p2);
  });

  // E-W roads
  f.range(n+1).forEach(function(r){
    offset_x = quad[0] * size.grid_city_1.city_section[0] * n;
    offset_y = quad[1] * size.grid_city_1.city_section[1] * r;
    p1 = [x, y+offset_y];
    p2 = [x+offset_x, y+offset_y];
    road(d,1,p1,p2);
  });

  x += size.road_width[1]/2;
  y += size.road_width[1]/2;
  f.range(n).forEach(function(c){
    f.range(n).forEach(function(r){
      if( r >= 2 || c >= 2 ){
        var w = size.grid_city_1.city_section[0] - size.road_width[1];
        var h = size.grid_city_1.city_section[1] - size.road_width[1];
        offset_x = quad[0] * ( w/2 + size.grid_city_1.city_section[0] * c );
        offset_y = quad[1] * ( h/2 + size.grid_city_1.city_section[0] * r );
        d.rect([x+offset_x,y+offset_y],[w,h], 'district');
        d.append( section_suburb(map_settings, [x+offset_x,y+offset_y]) );
      }
    });
  });
  //*/


  return d;
}
