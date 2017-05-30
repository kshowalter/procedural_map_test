//var Cycle = require('./Cycle');

var key_table = {
  38: 'up',
  40: 'down',
  37: 'left',
  39: 'right',
  87: 'w',
  65: 'a',
  83: 's',
  68: 'd',
  81: 'q',
  69: 'e',
  82: 'r',
  70: 'f',
  88: 'x',
  67: 'c',
  9: 'tab',
  16: 'shift',
  32: 'space',
  33: 'page_up',
  34: 'page_down',
  77: 'm',
  189: '-',
  187: '=',
};

var control = {};

control.init = function(actions){
  var control_object = this;
  this.actions = actions;
  document.addEventListener( 'keydown', function(e){control_object.key_press(e,'down');} );
  document.addEventListener( 'keyup',   function(e){control_object.key_press(e,'up'  );} );
  document.addEventListener( 'mousewheel',   function(e){control_object.wheel(e);} );

  //var svg_elem = document.getElementById('map_container').children[0];

  //window.addEventListener( 'mousedown',   function(e){control_object.wheel(e);} );
  //window.addEventListener( 'mousedown',   function(e){control_object.drag(e);} );
  //window.addEventListener( 'drag',   function(e){control_object.drag(e);} );

  //*
  var mouse_button_down;
  var mouse_start_x;
  var mouse_start_y;

  window.addEventListener('mousemove', function(e){
    if( mouse_button_down ){
      var delta_x = mouse_start_x - e.pageX;
      var delta_y = mouse_start_y - e.pageY;
      mouse_start_x = e.pageX;
      mouse_start_y = e.pageY;
      control_object.drag(e, delta_x, delta_y);
    }
  });

  window.addEventListener('mousedown', function(e){
    mouse_button_down = true;
    mouse_start_x = e.pageX;
    mouse_start_y = e.pageY;
  });

  window.addEventListener('mouseup', function(e){
    mouse_button_down = false;
  });
  //*/

};

control.wheel = function(e){
  e.preventDefault();
  var zoom_direction = e.deltaY > 0 ? 1 : 0;
  this.actions.zoom(zoom_direction);
};
control.drag = function(e, delta_x, delta_y){
  e.preventDefault();
  //console.log(e.pageX, e.pageY);
  this.actions.move_x(delta_x);
  this.actions.move_y(delta_y);
  //var zoom_direction = e.deltaY > 0 ? 1 : 0;
  //this.actions.zoom(zoom_direction);
};

control.key_press = function(e, key_action) {
  //log(e);
  //var key = e.which ? e.which : e.keyCode;
  var key_code = e.keyCode;
  var key_name = key_table[key_code];
  var act = this.actions;
  //console.log(key_code,key_name);
  if(key_name !== undefined){
    e.preventDefault();



    if( key_action === 'down' && key_name === 'page_up' ) {
      act.zoom(1);
    }
    if( key_action === 'down' && key_name === 'page_down' ) {
      act.zoom(0);
    }
    if( key_action === 'down' && key_name === '-' ) {
      act.zoom(1);
    }
    if( key_action === 'down' && key_name === '=' ) {
      act.zoom(0);
    }
    if( key_action === 'down' && key_name === 'up' ) {
      act.move_y(-5);
    }
    if( key_action === 'down' && key_name === 'down' ) {
      act.move_y(5);
    }
    if( key_action === 'down' && key_name === 'right' ) {
      act.move_x(5);
    }
    if( key_action === 'down' && key_name === 'left' ) {
      act.move_x(-5);
    }


  }

};



module.exports = control;
