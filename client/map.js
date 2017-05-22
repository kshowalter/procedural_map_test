import mkDrawing from 'mkDrawing';

export default function(){

  var x,y,w,h;
  var d = mkDrawing({
    size: {
      w: 1000,
      h: 1000
    }
  });


  x = 20;
  y = 20;
  w = 20;
  h = 10;
  d.layer('base');
  f.range(10).forEach(function(i){
    var x_l = x + (w*1.5 * i);
    f.range(10).forEach(function(i){
      var y_l = y + (w*1.5 * i);
      d.rect(
        [x_l,y_l],
        [w,h]
      );
    });
  });


  return d;
}
