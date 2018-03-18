require('babel-core/register');
require('babel-polyfill');

if (process.env.NODE_ENV === 'development') {
    require('./server-dev.js');
} else {
    require('./server-prod.js');
}
