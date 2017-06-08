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

  var mk_grid_locator = function(center, city_section){

    var grid_locaiton = function(loc_x, loc_y){
      var offset_x = city_section[0] * loc_x;
      var offset_y = city_section[1] * loc_y;
      var x = center[0] + offset_x;
      var y = center[1] + offset_y;
      return [x,y];
    };

    return grid_locaiton;
  };

  var grid_locaiton = mk_grid_locator(location,size.grid_city_1.city_section);
  console.log(location, grid_locaiton(0,2));

  var n = 5;
  f.range(n).forEach(function(i){
    var o = i+2;
    d.append( section_park(map_settings, grid_locaiton(0,o))  );
    d.append( section_park(map_settings, grid_locaiton(0,-o)) );
    d.append( section_park(map_settings, grid_locaiton(o,0))  );
    d.append( section_park(map_settings, grid_locaiton(-o,0)) );
  });
  d.append( section_park(map_settings, grid_locaiton(2,2))  );
  d.append( section_park(map_settings, grid_locaiton(2,1))  );
  d.append( section_park(map_settings, grid_locaiton(2,-1))  );
  d.append( section_park(map_settings, grid_locaiton(2,-2))  );
  d.append( section_park(map_settings, grid_locaiton(1,-2))  );
  d.append( section_park(map_settings, grid_locaiton(-1,-2))  );
  d.append( section_park(map_settings, grid_locaiton(-2,-2))  );
  d.append( section_park(map_settings, grid_locaiton(-2,-1))  );
  d.append( section_park(map_settings, grid_locaiton(-2,1))  );
  d.append( section_park(map_settings, grid_locaiton(-2,2))  );
  d.append( section_park(map_settings, grid_locaiton(-1,2))  );
  d.append( section_park(map_settings, grid_locaiton(1,2))  );


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
