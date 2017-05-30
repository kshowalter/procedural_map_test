export default function(state, svg_document){
  var x = state.ui.center.x - ( state.ui.view_size.w/2 * state.ui.scale );
  var y = state.ui.center.y - ( state.ui.view_size.h/2 * state.ui.scale );
  var w = state.ui.view_size.w * state.ui.scale;
  var h = state.ui.view_size.h * state.ui.scale;
  var view_box = x+' '+y+' '+w+' '+h;
  //svg_document.setAttribute('x', 0);
  //svg_document.setAttribute('y', 0);
  //svg_document.setAttribute('x', 0);
  //svg_document.setAttribute('y', 0);
  //console.log(view_box);
  //
  /*
  var svg_container = document.getElementById('map_container');
  if( svg_container ){
    var svg_document = svg_container.children[0];
    if( svg_document ){
      console.log(svg_document);
      //svg_document.setAttribute('viewBox', view_box);
    }
  }
  */
  svg_document.setAttribute('viewBox', view_box);
}
