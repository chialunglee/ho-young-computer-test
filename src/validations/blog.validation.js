const Joi = require('joi');

const createBlog = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    text: Joi.string().required(),
    blogUrl: Joi.string().uri().required(),
    score: Joi.number(),
  }),
};

module.exports = {
  createBlog,
};
