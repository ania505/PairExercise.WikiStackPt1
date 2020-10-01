const Sequelize = require('sequelize');
const pg = require('pg');

// const db = new Sequelize('postgres://localhost:5432/wikistack', {
//     logging: false
// });
// ^^ if it doesn't work use 3000

const db = new Sequelize('postgres://ania:newPassword@localhost/wikistack', {
    logging: false
})
// ^^ changes made just for Anna's computer


const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed'),
      defaultValue: 'open'
    }
});
  
const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true
      }
    }
});
  
  module.exports = { db, Page, User };