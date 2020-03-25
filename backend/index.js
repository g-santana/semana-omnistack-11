const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        name: "Gabriel Santana Barroso",
        age: 20,
        project: "OmniStack Training Week v11.0"
    });
});

app.listen(3333);

