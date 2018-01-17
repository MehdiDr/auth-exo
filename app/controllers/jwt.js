const jwt = require('jsonwebtoken');
const { getById } = require('../models/user');

    const extractBearerToken = headerValue => {
        if(typeof headerValue !== 'string')
            return false;
        const matches = headerValue.match(/(bearer)\s+(\S+)/i);
        return matches && matches[2];
    };
    exports.extractBearerToken = extractBearerToken;

    exports.checkTokenMiddlware = (req, res, next) => {
        const SECRET = 'coucou'
        const token = req.headers.authorization && extractBearerToken(req.headers.authorization);
        const verifiedToken = jtw.verify(token, SECRET);
    }