var Cycle = function(array){
  if( ! array || array.constructor !== Array) array = [];
  var cycle = {};
  //cycle.keys = Object.keys(obj)

  cycle.array = array;
  cycle.obj = {};
  cycle.index = 0;
  cycle.get = function(name){
    if( name ) {
      return this.obj[name];
    } else {
      return this.array[this.index];
    }
  };
  cycle.next = function(){
    var selection = this.array[this.index++];
    if( this.index > this.array.length-1 ) this.index = 0;
    console.log('selected: ', this.array[this.index]);
    return selection;
  };
  cycle.last = function(){
    this.index = this.array.length-1;
    var selection = this.array[this.index];
    return selection;
  };
  cycle.add = function(name, obj){
    this.array.push(obj);
    this.obj[name] = obj;
  };


  return cycle;
};

module.exports = Cycle;
