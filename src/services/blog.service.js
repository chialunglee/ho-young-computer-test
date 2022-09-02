const { Blog } = require('../models');

/**
 * Create a user
 * @param {Object} blogBody
 * @returns {Promise<User>}
 */
const createBlog = async (userId, blogBody) => {
  const finalBlogBody = JSON.parse(JSON.stringify(blogBody));
  finalBlogBody.userId = userId;

  return Blog.create(finalBlogBody);
};

module.exports = {
  createBlog,
};
