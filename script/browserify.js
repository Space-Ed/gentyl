var browserify = require('browserify');
var tsify = require('tsify');

browserify()
    .add('./src/main.ts')
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);
