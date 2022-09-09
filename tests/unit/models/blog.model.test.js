const faker = require('faker');
const { Blog } = require('../../../src/models');

describe('Blog model', () => {
  describe('Blog validation', () => {
    let newBlog;
    beforeEach(() => {
      newBlog = {
        title: faker.datatype.string(100),
        text: faker.datatype.string(5000),
        blogUrl: faker.internet.url(),
        score: faker.datatype.float({ min: 0, max: 1 }),
      };
    });

    test('should throw a validation error if blogUrl is invalid', async () => {
      newBlog.blogUrl = 'invalidUrl';
      await expect(new Blog(newBlog).validate()).rejects.toThrow();
    });

    test('should throw a validation error if title length is more than 100 characters', async () => {
      newBlog.title += faker.datatype.string();
      await expect(new Blog(newBlog).validate()).rejects.toThrow();
    });

    test('should throw a validation error if text length is more than 5000 characters', async () => {
      newBlog.text += faker.datatype.string();
      await expect(new Blog(newBlog).validate()).rejects.toThrow();
    });

    test('should throw a validation error if blogUrl length is more than 200 characters', async () => {
      const currentUrlLength = newBlog.blogUrl.length;
      newBlog.blogUrl += `/${faker.random.alphaNumeric(200 - currentUrlLength)}`;
      await expect(new Blog(newBlog).validate()).rejects.toThrow();
    });
  });
});
