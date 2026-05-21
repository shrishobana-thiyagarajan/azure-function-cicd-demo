const { app } = require('@azure/functions');

app.http('helloFunction', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            body: "Hello from Azure Function 🚀"
        };
    }
});
