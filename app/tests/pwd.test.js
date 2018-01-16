const { pwd, compare, encode } = require('../controllers/pwd');

test('encoded hash is defined', () => {
    return encode('coucou').then(
        hash => {
            console.log('hash:', hash);
            expect(hash).toBeDefined()
        }
    ); 
});

test('compare return true for ', ()=> {
    return compare('coucou', '$2a$05$3usBrOrsw3wmfdE/yP7QeeXyuhe21mBiYzCGJRUVUrG/m2mQQhMfm')
        .then( (result) => {
            return expect(result).toBe(true);
    })
})