const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const blogValidation = require('../../validations/blog.validation');
const blogController = require('../../controllers/blog.controller');

const router = express.Router();

router.route('/').post(auth('manageBlogs'), validate(blogValidation.createBlog), blogController.createBlog);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog management and retrieval
 */

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a blog
 *     description: Only registered users can create other blogs.
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - text
 *               - blogUrl
 *             properties:
 *               title:
 *                 type: string
 *                 maxLength: 100
 *               text:
 *                 type: string
 *                 maxLength: 5000
 *               blogUrl:
 *                 type: string
 *                 format: url
 *                 maxLength: 200
 *               score:
 *                 type: number
 *                 minimum: 1
 *             example:
 *               title: Sheepaaa
 *               text: a1b2c3d4
 *               blogUrl: https://www.example.com/dgbrgviurgy
 *               score: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Blog'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
