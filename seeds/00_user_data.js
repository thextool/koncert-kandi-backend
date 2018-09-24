
exports.seed = function(knex, Promise) {
  return knex('user_data').del()
    .then(function () {
      return knex('user_data').insert([
        {
          first_name: 'Matt',
          last_name: 'Riach',
          location_x: 39.7392,
          location_y: 104.9903,
          gene: 1,
        }
      ]);
    });
};
