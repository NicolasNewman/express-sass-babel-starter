const isProduction = 'production' === process.env.NODE_ENV;
const port = 4000;
const express     = require('express'),
      app         = express(),
      browserSync = require('browser-sync');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

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