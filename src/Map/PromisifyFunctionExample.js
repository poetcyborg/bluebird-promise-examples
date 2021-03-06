import C from '../Common'

export function run(array, debug, callback)
{
    C.setDebug(debug);

    let Promise = require('bluebird');

    let func = (a, callback) => {
        setTimeout(() => {
            callback(null, a + "?");
        }, 1000);
    };

    let funcAsync = Promise.promisify(func);

    Promise.map(array, (a) => {
        return funcAsync(a);
    })

    .map(C.addExclamationMark)

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
