"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "mhaidarhanif@gmail.com",
          password: "helloworld",
          name: "M Haidar Hanif",
          username: "mhaidarhanif",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "impactbyte@gmail.com",
          password: "helloworlds",
          name: "Impact Byte",
          username: "impactbyte",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("Users", null, {})
  }
}
