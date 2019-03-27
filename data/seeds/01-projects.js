exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Do the dishes",
          project_description:
            "Gotta keep the sink clean or else the flies will come"
        },
        {
          project_name: "Wash the car",
          project_description: "Too much pollen, the car looks green"
        },
        {
          project_name: "Give the cats a bath",
          project_description: "This should be fun"
        }
      ]);
    });
};
