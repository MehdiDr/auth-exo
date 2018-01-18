const bcrypt = require('bcrypt-nodejs');

// encoder le password

exports.encode = (pwd) => {
    if(!pwd) 
        return Promise.reject({error: 'Password is not defined'})

    return new Promise( (resolve, reject) => {
        bcrypt.genSalt(5, (err, salt) => {
            if(err)
                return reject(err);
            bcrypt.hash(pwd, salt, null, (err, hash)=> {
                if(err)
                    return reject(err);
                resolve(hash)
            })
        })
    });
}

exports.compare = (pwdClear, pwdHash) => {
    if(!pwdClear || pwdHash) 
        Promise.reject(new Error('Fuck you'))
    return new Promise( (resolve, reject) => {
        bcrypt.compare(pwdClear, pwdHash, (err, result) => {
            if(err)
                reject(err)
            result ? resolve(result) : reject(new Error('Bad password'))
        })
    })
}