const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../model/Post.model');

router.get('/', (request, response) => {
    Post.getPost(response);
});

router.get('/:id', (request, response) => {
    const id = request.params.id;
    Post.getPostById(id, response);
});

router.post('/update', (request, response) => {
    const { id, title, body } = request.body;
    Post.updatedPostById(response, id, title, body);
});

router.post('/add', (request, response) => {
    const { title, body } = request.body;
    Post.addPost(response, title, body);
});

router.post('/delete', (request, response) => {
    const id = request.body.id;
    Post.deletePost(response, id);
});

module.exports = router;
