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

  var x,y,w,h;
  var house_lx, house_ly;


  var block_lx = size.grid_city_1.block_size[0];
  var block_ly = (size.grid_city_1.block_size[1] - size.road_width[1]*3 ) /4 ;
  var lot_lx = block_lx/10;
  var lot_ly = block_ly/2;


  ///////////////////////
  // blocks


  x = location[0] - size.grid_city_1.block_size[0]/2;
  y = location[1] - size.grid_city_1.block_size[1]/2;



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

      var min_width = 4;
      house_lx = map_settings.chance.normal({mean: 10, dev: 3});
      house_lx = house_lx > lot_lx ? lot_lx : house_lx;
      house_lx = house_lx < min_width ? min_width : house_lx;
      house_ly = map_settings.chance.normal({mean: 10, dev: 3});
      house_ly = house_ly > lot_ly ? lot_ly : house_ly;
      house_ly = house_ly < min_width ? min_width : house_ly;
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

  var block_group_lx = block_lx + size.road_width[1];
  var block_group_ly = ( block_ly + size.road_width[1] ) *4 - size.road_width[1];

  var half_road_width = size.road_width[1]/2;
  var n = 4
  f.range(n).forEach(function(r){
    var l_y = y + lot_ly*2 + (block_ly + size.road_width[1])*r + size.road_width[1]/2;
    // E-W main road
    if( r < n-1 ){
      p1 = [x-half_road_width, l_y];
      p2 = [x+block_lx+half_road_width, l_y];
      if( r%2 === 1 ){
        road(d,1,p1,p2);
      } else {
        canal(d,1,p1,p2);
      }

    }
  });



  return d;
}
