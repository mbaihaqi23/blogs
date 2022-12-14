const express = require('express');
const postValidation = require('../middleware/post.validation');
const tokenVerification = require('../middleware/token.verification');
const validate = require('../middleware/validation');
const postController = require('./post.controller');
const postRouter = express.Router();



//API - Get all posts
postRouter.get('/posts', postController.getAllPost);

/**
 * @swagger
 * /posts:
 *  get:
 *    tags: 
 *      - post
 *    summary: API Get All Posts
 *    description: Api ini digunakan untuk menampilkan semua post
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Judul
 *                body:
 *                  type: string
 *                  example: one punch man
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */

//API - Get post by postId
postRouter.get('/post', tokenVerification, postController.getPostbyId);

/**
 * @swagger
 * /post:
 *  get:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Get Post From Specific User
 *    parameters:
 *      - in: query
 *        name: writer
 *        required: true
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: One punch man
 *                body:
 *                  type: string
 *                  example: anime japan
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */


// API - Create post
postRouter.post('/post', tokenVerification, postValidation, validate, postController.createPost);

/**
 * @swagger
 * /post:
 *  post:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Create Post
 *    parameters:
 *      - in: query
 *        name: writer
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                title:
 *                  type: string
 *                  example: one punch man
 *                body:
 *                  type: string
 *                  example: anime japan
 *                image:
 *                  type: string
 *                  example: image.jpg
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: one punch man
 *                body:
 *                  type: string
 *                  example: anime japan
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */

//  API - Edit Post
postRouter.put('/post/:postId', tokenVerification, postValidation, validate, postController.editPost)

/**
 * @swagger
 * /post/{postId}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Edit Post
 *    parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *      - in: query
 *        name: writer
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                title:
 *                  type: string
 *                  example: one punch man
 *                body:
 *                  type: string
 *                  example: anime japan
 *                image:
 *                  type: string
 *                  example: image.jpg
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Judul
 *                body:
 *                  type: string
 *                  example: one puch man
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */

// API - detail posts
postRouter.get('/post/:postId', postController.detailPost);

/**
 * @swagger
 * /post/{postId}:
 *  get:
 *    tags:
 *      - post
 *    summary: API Get Detail Post
 *    parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: one punch man
 *                body:
 *                  type: string
 *                  example: anime japan
 *                image:
 *                  type: string
 *                  example: image.jpg
 *      '500':
 *        description: 
 */

// API - delete posts
postRouter.delete('/post/:postId', tokenVerification, postController.deletePost);

/**
 * @swagger
 * /post/{postId}:
 *  delete:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - post
 *    summary: API Delete Post
 *    parameters:
 *      - in: query
 *        name: writer
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                title:
 *                  type: string
 *                  example: one punch man
 *                body:
 *                  type: string
 *                  example: anime japan
 *                image:
 *                  type: string
 *                  example: image.jpg
 *    responses:
 *      '200':
 *        description: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                postId:
 *                  type: integer
 *                  example: 1
 *                status:
 *                  type: string
 *                  example: deleted
 *      '500':
 *        description: 
 */


module.exports = postRouter