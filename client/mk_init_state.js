export default function() {
  var initState = {
    db: [],
    drawing: {},
    svg: '',
    seed: 'pholow',
    ui: {
      title: 'procedural map test',
      scale: 1,
      center: [100,100],
      view_size: [500,500]
    }
  };


  return initState;
}
