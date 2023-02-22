const db = require('../dbconnect/dbconnect.js');
const UserPool = require('../dbconnect/up.config.js');
const AuthService = require('../service/auth.service');
const Response = require('../service/Response');

// create obj
const as = new AuthService();
const response = new Response();
exports.signIn = async(req,resp) =>{
    console.log('in sign in');
}