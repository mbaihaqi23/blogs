const express = require("express");
const tokenVerification = require("../middleware/token.verification");
const registrationValidation = require('../middleware/registration.validation')
const validate = require('../middleware/validation')
const userRouter = express.Router();

const userController = require("./user.controller");

//register page
userRouter.post('/user/registration', registrationValidation, validate, userController.createUser);

/**
 * @swagger
 * /user/registration:
 *  post:
 *    tags: 
 *      - user
 *    summary: API Create User
 *    description: Api ini digunakan untuk create user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Contoh Nama
 *              email:
 *                type: string
 *                example: rico@gmail.com
 *              password:
 *                type: string
 *                example: 1231$%qwerty
 *    responses:
 *      '200':
 *        description: Create User Berhasil sukses
 *      '500':
 *        description: Create user failed!
 */


//edit page
userRouter.put('/user/?userId=', registrationValidation, validate, tokenVerification, userController.editUser);

/**
 * @swagger
 * /user/{userId}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - user
 *    summary: API Edit User
 *    parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Nama lengkap
 *              email:
 *                type: string
 *                example: rico@gmail.com
 *              password:
 *                type: string
 *                example: 1231$%qwerty
 *    responses:
 *      '200':
 *        description: Edit data user sukses
 *      '500':
 *        description: Edit data user failed!
 */

module.exports = userRouter;