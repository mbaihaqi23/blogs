const express = require("express");
const loginValidation = require("../middleware/auth.validation");
const validate = require("../middleware/validation");
const authRouter = express.Router();
const authController = require("./auth.controller");

authRouter.post("/auth/login", loginValidation, validate, authController.login);
/**
 * @swagger
 * /auth/login:
 *  post:
 *    tags: 
 *      - authorization
 *    summary: API Login
 *    description: Api ini digunakan untuk login
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: rico@gmail.com
 *              password:
 *                type: string
 *                example: 1231$%qwerty
 *    responses:
 *      '200':
 *        description: Login sukses
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                accessToken:
 *                  type: string
 *                  example: nvurvjn4854unv8u45h8gu4n5uhg489uh5g4895jhg9498t5jg4584908g5j490g5j
 *      '400':
 *        description: Login gagal
 */

module.exports = authRouter;  