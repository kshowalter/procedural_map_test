import map_settings from '../settings/settings';
import geometry from 'geometry';


export default function(d,road_type,p1,p2){
  var distance = geometry.distance_between(p1,p2);
  var center = geometry.move_toward( p1, p2, distance/2 );
  var angle = geometry.direction(p1,p2);
  var road_width = map_settings.size.road_width[road_type];
  d.rect(
    center,
    [distance,road_width],
    'water'
  ).rotate(angle);
}
