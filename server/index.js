/*
 * External NPM modules
 */
const express = require('express');

/*
 * Internal modules
 */

const authController = require('./controllers/auth-controller');

/*
 * Initializing express App
 */
const app = express();

/*
 * Routes
 */
app.post('/login', authController.login);
app.get('/logout', authController.logout);

/*
 * Starting server
 */
app.listen(3000, () => console.log('App listening on port 3000!'))

