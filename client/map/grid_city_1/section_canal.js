import mkDrawing from 'mkDrawing';
import geometry from 'geometry';
import Chance from 'chance';
import fonts from '../settings/fonts';
import layer_attr from '../settings/layers';
import map_settings from '../settings/settings';


var road = function(d,road_type,p1,p2){
  var distance = geometry.distance_between(p1,p2);
  //var distance = geometry.distance_between(p1,p2);
  var center = geometry.move_toward( p1, p2, distance/2 );
  var angle = geometry.direction(p1,p2);

  var road_width = map_settings.size.road_width[road_type];

  d.rect(
    center,
    [distance,road_width],
    'road'
  ).rotate(angle);
};

var size = map_settings.size;
var loc = map_settings.loc;


export default function(state){
  var seed = state.seed || 'pholow';
  var chance = new Chance(seed);


  var x,y,w,h;
  var house_lx, house_ly;

  var d = mkDrawing({
    size: state.ui.view_size,
    center: state.ui.center,
    fonts: fonts,
    layer_attr: layer_attr,
    scale: state.ui.scale,
  });

  var block_lx= size.grid_city_1.city_section[0];
  var block_ly= (size.grid_city_1.city_section[1] - size.road_width*3 ) /4 ;
  var lot_lx = block_ly/2;
  var lot_ly = block_ly/2;


  ///////////////////////
  // blocks


  x = loc.city_center[0];
  y = loc.city_center[1];

  x += size.road_width[2]/2;
  y += size.road_width[2]/2;
  d.circ([x,y],3,'base');
  d.circ([x,y],5,'base');




  d.layer('base');
  f.range(4).forEach(function(r){
    var lot_count = Math.floor(block_lx/lot_lx);

    var l_y = y + lot_ly/2 + (block_ly + size.road_width[1])*r;

    f.range(lot_count).forEach(function(c){
      var l_x = x + (lot_lx * c) + lot_lx/2;


      d.rect(
        [l_x,l_y],
        [lot_lx,lot_ly],
        'property'
      );

      house_lx = chance.normal({mean: 10, dev: 3});
      house_lx = house_lx > lot_lx ? lot_lx : house_lx;
      house_ly = chance.normal({mean: 10, dev: 3});
      house_ly = house_ly > lot_ly ? lot_ly : house_ly;
      d.rect(
        [l_x,l_y],
        [house_lx,house_ly],
        'house'
      );

      d.rect(
        [l_x,l_y+lot_ly],
        [lot_lx,lot_ly],
        'property'
      );
      d.rect(
        [l_x,l_y+lot_ly+lot_ly/6],
        [lot_lx,lot_ly/2],
        'house'
      );

    });
  });


  //////////////////
  // ROADS

  var p1, p2;

  x = loc.city_center[0];
  y = loc.city_center[1];

  var block_group_lx = block_lx + size.road_width[2];
  var block_group_ly = ( block_ly + size.road_width[2] ) *4 - size.road_width[2];

  // E-W main road
  p1 = [x,y];
  p2 = [x + block_group_lx, y];
  road(d,2,p1,p2);
  d.circ(p1,size.road_width[2],'intersection');

  // E-W main road
  p1 = [x,y+block_group_ly];
  p2 = [x + block_group_lx, y+block_group_ly];
  road(d,2,p1,p2);
  d.circ(p1,size.road_width[2],'intersection');

  // N_S main road
  p1 = [x,y];
  p2 = [x, y + block_group_ly ];
  road(d,2,p1,p2);

  // N_S main road
  p1 = [x+block_group_lx,y];
  p2 = [x+block_group_lx, y + block_group_ly ];
  road(d,2,p1,p2);
  d.circ(p1,size.road_width[2],'intersection');
  d.circ(p2,size.road_width[2],'intersection');

  x = loc.city_center[0];
  y = loc.city_center[1];
  x += size.road_width[2]/2;
  y += size.road_width[2]/2;

  f.range(4).forEach(function(r){
    var l_y = y + lot_ly*2 + (block_ly + size.road_width[1])*r + size.road_width[1]/2;
    // E-W main road
    p1 = [x,                l_y];
    p2 = [x+block_group_lx, l_y];
    road(d,1,p1,p2);
  });



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
