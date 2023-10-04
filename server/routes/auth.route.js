const route = require('express').Router();
const user_controller = require('../controllers/user.controller');
const auth_middleware = require('../middleware/auth.middleware');


route.post('/register', user_controller.Register);
route.post('/login', user_controller.Login);
route.post('/token', auth_middleware.verifyRefreshToken, user_controller.GetAccessToken);


module.exports = route;