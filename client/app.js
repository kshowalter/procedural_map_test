/**
 * this is the app
 * @file_overview this the starting point for the application.
 * @author keith showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */
console.log('/\\');


import f from 'functions';
var global = window || global;
global.logger = console.log;
global.f = f;

import map_drawing from './map';

//////////////

var target_element = document.getElementById('content');

import mk_init_state from './mk_init_state';
var init_state = mk_init_state();

init_state.drawing = map_drawing(init_state);


var reducers = {
  // actions.init()
  init: function(state, action){
    console.log('init', action);
    return state;
  },
  // actions.route(subject_id)
  route: function(state, action){
    var subject_id = action.arguments[0];
    console.log('subject_id', subject_id);
    //state.ui.selected_subject = subject_id;
    return state;
  },
  zoom_in: function(state, action){
    console.log(action);
    state.ui.zoom += 0.1;
    return state;
  },
  zoom_out: function(state, action){
    console.log(action);
    state.ui.zoom -= 0.1;
    return state;
  },

};

import mkViewConfig from './view/mkViewConfig';
var mk_page_spec = function(state, actions){
  console.log('^s: ', state);
  global.state = state; // devmode
  sessionStorage.setItem('selected_subject', state.ui.selected_subject);
  document.title = state.ui.title;

  state.drawing = map_drawing(state);
  state.svg = state.drawing.mkSVG();
  var page_spec = mkViewConfig(state, actions);
  return page_spec;
};

//////////////

import website from 'mkwebsite';
var actions = website(target_element, init_state, reducers, mk_page_spec);
global.actions = actions;
///////////////

import router from 'hash_router';
router(actions.route);

import controls from './lib/controls';
controls.init(actions);

actions.init();

window.onresize = function(){
  //console.log(window.inner_width);
};


console.log('\\/');
