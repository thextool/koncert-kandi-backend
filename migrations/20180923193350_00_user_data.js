
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_data', (table) => {
        table.increments()
        table.text('first_name').notNullable()
        table.text('last_name').notNullable()
        table.float('location_x').notNullable()
        table.float('location_y').notNullable()
        table.integer('gene').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_data')

};
