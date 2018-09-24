
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_data', (table) => {
        table.increments()
        table.text('first_name')
        table.text('last_name')
        table.float('location_x')
        table.float('location_y')
        table.integer('gene').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_data')

};
