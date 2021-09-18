const cors = require('cors');
//the bottom whitelist is the two locations that are able to connect to.
const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin')); 
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true};
    } else {
        corsOptions = {origin: false};
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
//simple way to connect cors to the website for SAME ORIGIN POLICY