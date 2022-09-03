const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { blogService } = require('../services');

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog(req.user._id, req.body);
  res.status(httpStatus.OK).send(blog);
});

module.exports = {
  createBlog,
};
