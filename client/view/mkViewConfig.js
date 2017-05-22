import {div, span, p, a, ul, li, br, h1, h2, h3, input} from 'specdom_helper';

var test = function(input){
  console.log('test', input);
};
var togleFold = function(e){
  console.log('test', e);
};



var toolBar = function(state){

  var title = state.db[state.ui.selected_subject].title;

  var toolBarConfig = {
    tag: 'div',
    props: {
      class: 'toolBar',
    },
    children: [
      {
        tag: 'span',
        props: {
          class: 'title',
        },
        text: 'sumpedia ('+title+')'
      }
    ]
  };
  return toolBarConfig;
};



export default function(state, actions){

  var title = state.db[state.ui.selected_subject].title;

  var subjectPage = {
    tag: 'div',
    props: {
      class: 'subjectPage',
    },
    children: [
      title
    ]
  };

  var domConfig = [
    toolBar(state),
    subjectPage
  ];

  return domConfig;
}
