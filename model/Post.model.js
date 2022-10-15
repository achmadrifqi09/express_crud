const { response } = require('express');
const db = require('../config');

exports.getPost = (response) => {
    const querySql = 'SELECT * FROM `posts`';

    db.query(querySql, (error, result) => {
        if (error) console.log('error : ', error);

        const posts = {
            data: JSON.parse(JSON.stringify(result)),
        };

        response.render('index', { posts });
        response.end();
    });
};

exports.getPostById = (id, response) => {
    const querySql = `SELECT * FROM posts WHERE id = ${id}`;
    db.query(querySql, (error, result) => {
        if (error) console.log('error : ', error);

        const post = {
            title: 'Edit Post',
            data: JSON.parse(JSON.stringify(result)),
        };

        response.render('postEdit', { post });
        response.end();
    });
};

exports.updatedPostById = (response, ...data) => {
    const [id, title, body] = data;

    const querySql = `UPDATE posts SET title = '${title}', body = '${body}' WHERE id = '${id}'`;

    db.query(querySql, (error, result) => {
        if (error) return console.log(error);

        response.redirect('/post');
        response.end();
    });
};

exports.addPost = (response, ...data) => {
    const [title, body] = data;
    const querySql = `INSERT INTO posts (title, body) VALUES ('${title}','${body}')`;

    db.query(querySql, (error, result) => {
        if (error) return console.log(error);

        response.redirect('/post');
        response.end();
    });
};

exports.deletePost = (response, id) => {
    const querySql = `DELETE FROM posts where id = ${id}`;

    db.query(querySql, (error, result) => {
        if (error) return console.log(error);

        response.redirect('/post');
        response.end();
    });
};
