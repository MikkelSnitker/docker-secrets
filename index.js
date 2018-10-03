const fs = require('fs');
const path = require("path");
const secrets = "/run/secrets"
if(fs.existsSync(secrets))
fs.readdirSync(secrets).forEach(file => {
    process.env[file] = fs.readFileSync(path.join(secrets, file))
});


