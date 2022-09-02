const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length > 100) {
          throw new Error('Exceed max length');
        }
      },
    },
    text: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length > 5000) {
          throw new Error('Exceed max length');
        }
      },
    },
    blogUrl: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length > 200) {
          throw new Error('Exceed max length');
        }

        if (!validator.isURL(value)) {
          throw new Error('Invalid URL');
        }
      },
    },
    score: {
      type: Number,
      validate(value) {
        if (value > 1 || value < 0) {
          throw new Error('Invalid score');
        }
      },
    },
    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
blogSchema.plugin(toJSON);
blogSchema.plugin(paginate);

/**
 * @typedef Blog
 */
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
