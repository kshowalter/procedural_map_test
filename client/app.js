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

import get_html from './get_html';
import parse_wiki_query_results from './parse_wiki_query_results';

//////////////

var target_element = document.getElementById('content');

import mk_init_state from './mk_init_state';
var init_state = mk_init_state();


var reducers = {
  // actions.init()
  init: function(state, action){
    console.log('init', action);
    return state;
  },
  // actions.route(subject_id)
  route: function(state, action){
    var subject_id = action.arguments[0] || state.ui.default_page;
    console.log('subject_id', subject_id);
    state.ui.selected_subject = subject_id;
    return state;
  }
};

import mkViewConfig from './view/mkViewConfig';
var mk_page_spec = function(state, actions){
  global.state = state; // devmode
  sessionStorage.setItem('selected_subject', state.ui.selected_subject);

  var page_spec = mkViewConfig(state, actions);
  return page_spec;
};

//////////////

import website from 'mkwebsite';

var actions = website(target_element, init_state, reducers, mk_page_spec);

///////////////

import router from 'hash_router';

router(actions.route);

window.onresize = function(){
  //console.log(window.inner_width);
};


console.log('\\/');
