import mkDrawing from 'mkDrawing';
import quad from './quad';
import section_park from './section_park';

//import canal_section from './canal_section';


export default function(location, map_settings){
  var size = map_settings.size;
  //var loc = map_settings.loc;
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

  var n = 5;
  f.range(n).forEach(function(i){
    offset_x = size.grid_city_1.city_section[0] * (2+i);
    offset_y = size.grid_city_1.city_section[1] * (2+i);
    d.append( section_park(map_settings, [x+offset_x,y]) );
    d.append( section_park(map_settings, [x-offset_x,y]) );
    d.append( section_park(map_settings, [x,y+offset_y]) );
    d.append( section_park(map_settings, [x,y-offset_y]) );
  });

  x = center_x + size.grid_city_1.city_section[0]/2;
  y = center_y + size.grid_city_1.city_section[1]/2;
  d.append( quad( [x,y], [1,1], map_settings) );
  x = center_x + size.grid_city_1.city_section[0]/2;
  y = center_y - size.grid_city_1.city_section[1]/2;
  d.append( quad( [x,y], [1,-1], map_settings) );
  x = center_x - size.grid_city_1.city_section[0]/2;
  y = center_y + size.grid_city_1.city_section[1]/2;
  d.append( quad( [x,y], [-1,1], map_settings) );
  x = center_x - size.grid_city_1.city_section[0]/2;
  y = center_y - size.grid_city_1.city_section[1]/2;
  d.append( quad( [x,y], [-1,-1], map_settings) );

  return d;
}
