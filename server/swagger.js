const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definição das opções do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bob Resolve API',
      version: '1.0.0',
      description: 'Bob Resolve API',
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos que contêm a documentação da API
};

// Inicializa o swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};