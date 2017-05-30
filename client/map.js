import mkDrawing from 'mkDrawing';
import geometry from 'geometry';
import Chance from 'chance';
import fonts from './settings/fonts';
import layer_attr from './settings/layers';

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

  x = 20;
  y = 20;
  var block_lx= 200;
  var block_ly= 40;
  var road_w = 10;

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

  var road = function(d,start,end){

    d.rect(
      [ (start[0]+end[0])/2 ,  (start[1]+end[1])/2  ],
      [ ],
      'road'
    );
  }

  /*
  road(d,
    [
      x,
      y
    ],
    [
      x + block_lx + road_w/2,
      y + block_ly + road_w/2,
    ]);
  //*/


  return d;
}
