import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'

// Swagger yapılandırma ayarları
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API',
            version: '1.0.0',
            description: 'Express API için otomatik dokümantasyon',
        },
        servers: [
            {
                url: 'http://localhost:2030', // API sunucunuzun URL'si
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                BearerAuth: [], // Bu, tüm API'ler için geçerli olacaktır
            },
        ],
    },
    apis: ['./routes/*.js'], // API endpoint'lerini içeren dosyalar
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log(swaggerDocs); // Konsola yazdırarak kontrol edin


export { swaggerDocs, swaggerUi };