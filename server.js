const port = 3000; // port untuk running server (port frontend 8000++, port backend 3000++)
const express = require('express');
const server = express();
const postController = require('./controller/post.controller');
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.set('view engine', 'ejs');
server.set('views', 'view');
server.use('/post', postController);

// callback 1 harus request dan 2 harus response
server.get('/', (request, response) => {
    response.send('Main server success ok!');
});

server.listen(port, () => {
    console.log('Server running on ' + port);
});
