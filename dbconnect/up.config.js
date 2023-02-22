const { CognitoUserPool } = require('amazon-cognito-identity-js');

const userPoolConfig = () => new CognitoUserPool({
    UserPoolId:'',
    ClientId:''
});
module.exports = userPoolConfig;