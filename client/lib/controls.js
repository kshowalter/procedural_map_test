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
};

var control = {};

control.init = function(actions){
  var control_object = this;
  this.actions = actions;
  document.addEventListener( 'keydown', function(e){control_object.key_press(e,'down');} );
  document.addEventListener( 'keyup',   function(e){control_object.key_press(e,'up'  );} );
};



control.key_press = function(e, key_action) {
  //log(e);
  //var key = e.which ? e.which : e.keyCode;
  var key_code = e.keyCode;
  var key_name = key_table[key_code];
  var act = this.actions;
  console.log(key_code,key_name);
  if(key_name !== undefined){
    e.preventDefault();


    if( key_action === 'down' && key_name === 'page_up' ) {
      //act.zoom_out();
    }
    if( key_action === 'down' && key_name === 'page_down' ) {
      act.zoom_in();
    }


  }

};



module.exports = control;
