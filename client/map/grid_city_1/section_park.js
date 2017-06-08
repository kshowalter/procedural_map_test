import mkDrawing from 'mkDrawing';
import road from '../road';
import canal from '../canal';

export default function(map_settings, location){
  var size = map_settings.size;
  var loc = map_settings.loc;

  var d = mkDrawing({
    fonts: map_settings.fonts,
    layer_attr: map_settings.layer_attr,
  });

  var x = location[0];
  var y = location[1];

  var w = size.grid_city_1.city_section[0] - size.road_width[1];
  var h = size.grid_city_1.city_section[1] - size.road_width[1];

  d.rect([x,y],[w,h],'park');


  return d;
}
