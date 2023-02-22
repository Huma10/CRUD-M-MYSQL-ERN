const LoginController = require('../controllers/auth.controller');
module.exports = (app) =>{
    app.post('/login',LoginController.signIn);
}