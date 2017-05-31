import mkDrawing from 'mkDrawing';
import geometry from 'geometry';
import Chance from 'chance';
import fonts from './settings/fonts';
import layer_attr from './settings/layers';

var map_settings = {
  loc: {
    city_center: [10,10]
  },
  size: {
    road_width: [1,
      4,
      6
    ]
  }
};

var size = map_settings.size;
var loc = map_settings.loc;


export default function(state){
  var seed = state.seed || 'pholow';
  var chance = new Chance(seed);


  var x,y,w,h;
  var d = mkDrawing({
    size: state.ui.view_size,
    center: state.ui.center,
    fonts: fonts,
    layer_attr: layer_attr,
    scale: state.ui.scale,
  });

  x = loc.city_center[0];
  y = loc.city_center[1];
  d.circ(
    [x,y],
    3,
    'base'
  );
  d.circ(
    [x,y],
    5,
    'base'
  );

  x += size.road_width[2];
  y += size.road_width[2];


  var block_lx= 200;
  var block_ly= 40;
  var road_w = size.road_width[1];



  d.layer('base');
  f.range(4).forEach(function(r){
    var l_y = y + (block_ly + road_w)*r;

    var lot_lx = 20;
    var lot_ly = 20;
    var lot_count = Math.floor(block_lx/lot_lx);
    f.range(lot_count).forEach(function(c){
      var l_x = x + (lot_lx * c) + lot_lx/2;
      d.rect(
        [l_x,l_y],
        [lot_lx/2,lot_ly/2],
        'house'
      );

      d.rect(
        [l_x,l_y],
        [lot_lx,lot_ly],
        'property'
      );



    });

    l_y = y + (block_ly + road_w)*r + lot_ly;

    lot_lx = 10;
    lot_ly = 20;
    lot_count = Math.floor(block_lx/lot_lx);
    f.range(lot_count).forEach(function(c){
      var l_x = x + (lot_lx * c) + lot_lx/2;
      d.rect(
        [l_x,l_y],
        [lot_lx,lot_ly/2],
        'house'
      );
      d.rect(
        [l_x,l_y],
        [lot_lx,lot_ly],
        'property'
      );


    });


      //var house_l1 = chance.natural({min:15, max: 25});
      //var house_l2 = chance.natural({min:15, max: 25});
  });



  var road = function(d,road_type,p1,p2){
    console.log(p1,p2);
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

  var p1, p2;

  x = loc.city_center[0];
  y = loc.city_center[1];

  //*
  p1 = [x,y];
  p2 = [x, y + block_lx + road_w/2];
  road(d,2,p1,p2);

  p1 = [x,y];
  p2 = [x + block_lx + road_w/2, y];
  road(d,2,p1,p2);

  p1 = [x,y];
  p2 = [x - 60, y - 60];
  road(d,2,p1,p2);
  //*/


  return d;
}
