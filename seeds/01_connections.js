
exports.seed = function(knex, Promise) {
  return knex('connections').del()
    .then(function () {
      return knex('connections').insert([
          {
            location_x: 40.7128,
            location_y: 74.0060,
            gene: 2,
          },
          {
            location_x: 34.0522,
            location_y: 118.2437,
            gene: 3,
          },
      ]);
    });
};
