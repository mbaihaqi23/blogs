const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Blogs API',
        description: 'Ini adalah blogs API',
        version: '1.0.0',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
          },
        },
      },
    },
    apis: ["./src/*/*.route.js"], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJsdoc(options);

  module.exports = openapiSpecification