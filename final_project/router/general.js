const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
    //Write your code here
    return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
    //Write your code here
    res.send(JSON.stringify(books, null, 4));
    //   return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    //Write your code here
    const isbn = req.params.isbn;

    Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate));

    var filtered_books = Object.filter(books, ([key, value]) => key == isbn);

    res.send(filtered_books); 
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    //Write your code here
    const author = req.params.author;

    Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate));

    var filtered_books = Object.filter(books, ([key, value]) => value.author === author);

    res.send(filtered_books); 
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;

    Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate));

    var filtered_books = Object.filter(books, ([key, value]) => value.title === title);

    res.send(filtered_books); 
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    //Write your code here
    const isbn = req.params.isbn;

    Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate));

    var filtered_books = Object.filter(books, ([key, value]) => key == isbn);

    res.send(filtered_books); 

});

module.exports.general = public_users;
