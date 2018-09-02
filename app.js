const isProduction = 'production' === process.env.NODE_ENV;
const port = 4000;
const express     = require('express'),
      app         = express(),
      serveStatic = require('serve-static'),
      path        = require('path'),
      browserSync = require('browser-sync'),
      mongoose    = require('mongoose');

// Use this line to enable loging information
// Use Logger.info or Logger.error
// const Logger = require("./modules/Logger");

app.set("view engine", "ejs");

// Use this if mongoose is needed
// mongoose.connect("mongodb://localhost:27017/steam_data", {useNewUrlParser: true});

// Use either option one or two for serving the public directory
// OPTION ONE
// app.use(express.static(__dirname + "/public"));

// OPTION TWO (requires serve-static)
// setCustomCacheControl = (res, path) => {
//     if (serveStatic.mime.lookup(path) === 'text/html') {
//         res.setHeader('Cache-Control', 'public, max-age=0')
//     }
// };
// app.use(serveStatic(path.join(__dirname, 'public'), {
//     maxAge: 31536000,
//     setHeaders: setCustomCacheControl
// }));

app.get('/', async (req, res) => {
    res.render("index");
});

app.listen(port, 'localhost', () => {
    if(!isProduction) {
        browserSync({
            files: ['views/**/*.ejs', 'public/css/*.css'],
            online: false,
            open: 'local',
            port: port + 1,
            proxy: 'localhost:' + port,
            ui: false
        });
    }
});