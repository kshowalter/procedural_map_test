export default function(json){
  var page_list = [];
  for( var pageid in json.query.pages ){
    var page_info = json.query.pages[pageid];
    if( page_info.title.search('disambiguation') < 0 ){
      page_list[page_info.index] = page_info;
    }
  }
  page_list = page_list.filter(Boolean);

  return page_list;
}
