const jwt = require('jsonwebtoken');
const user = require('../models/user');

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
        if(!token)
            return res.status(403).json({ error: 'Bad token mf'})
        const verifiedToken = jtw.verify(token, SECRET);
        console.log('decoded token:', verifiedToken)

        user.getBydId(decodedToken.id)
        .then( user => {
            if(!user)
                return res.status(403).json({error: 'User don\'t exist'});
            req.user = user
            next()
        })
        .catch(err => res.json(err))

    }