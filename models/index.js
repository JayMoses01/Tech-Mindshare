const User = require('../models/User');
const Blog = require('../models/Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog };
