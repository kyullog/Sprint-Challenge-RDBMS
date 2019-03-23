exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("action_description").notNullable();
    tbl.text("notes");
    tbl.boolean("action_completed").defaultTo(false);
    tbl
      .foreign("project_id")
      .references("projects.id")
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
