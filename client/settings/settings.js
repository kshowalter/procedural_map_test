// block 1
/*
25m * 25m = 625m2 = 0.154441 acre



*/



var settings = {
  loc: {
    city_center: [10,10]
  },
  size: {
    road_width: [2.5,
      5,
      10,
      15
    ]
  }
};

settings.size.grid_city_1 = {
  city_section: [250,250],
  grid_road_width: settings.size.road_width[1]
};
settings.size.grid_city_1.block_size = [
  settings.size.grid_city_1.city_section[0] - settings.size.grid_city_1.grid_road_width,
  settings.size.grid_city_1.city_section[1] - settings.size.grid_city_1.grid_road_width,
];

export default settings;
