const allRoles = {
  user: ['manageBlogs'],
  admin: ['getUsers', 'manageUsers', 'manageBlogs'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
