const {body} = require("express-validator");

const postValidation = [
    body("title").isString(),
    body("body").isString(),
];

module.exports = postValidation
