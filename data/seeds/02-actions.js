exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          action_description: "Rinse off the dishes",
          notes: "scrape off any stuck on protein",
          project_id: 1
        },
        {
          action_description: "Load the dishwasher",
          notes: "No plates on the top rack, dummy",
          project_id: 1
        },
        {
          action_description: "Make soapy water",
          notes: "Use dawn soap",
          project_id: 2
        },
        {
          action_description: "Lather up the car",
          notes: "Don't miss a spot",
          project_id: 2
        },
        {
          action_description: "Rinse off with hose",
          notes: "Don't you dare leave any soap on the car",
          project_id: 2
        },
        {
          action_description: "Sedate the cats",
          notes: "Nobody needs to get catscratch fever",
          project_id: 3
        },
        {
          action_description: "Wash the cats in the bath",
          notes: "Do not let the sleepy cats drown",
          project_id: 3
        },
        {
          action_description: "Rinse the cats",
          notes: "Yay, clean cats",
          project_id: 3
        },
        {
          action_description: "Give the cats some space",
          notes: "They're probably going to be mad for a little while",
          project_id: 3
        },
        {
          action_description: "Start dishwasher",
          notes:
            "Nobody likes to go and unload a full load of dishes, and find out that they're still dirty",
          project_id: 1
        }
      ]);
    });
};
