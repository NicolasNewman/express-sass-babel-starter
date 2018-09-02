#!/bin/sh
# Requires the following to be installed globally:
# - node-sass
# - babel-cli

rm -rf dist/
mkdir -p dist/public/img dist/public/js dist/public/css dist/public/fonts
mkdir -p dist/views dist/logs

node-sass sass/main.scss public/css/styles.css

# This line will need to be modified to suit your needs
cp -r public/js/. dist/public/js
npx babel public/js/script.js --out-file dist/public/js/script.js

cp -r public/img/. dist/public/img
cp -r public/css/. dist/public/css
cp -r public/fonts/. dist/public/fonts
cp -r views/ dist/views
cp -r models/ dist/models
cp -r modules/ dist/modules
cp app.js dist/
cp package.json dist/
cp package-lock.json dist/

cleancss -o dist/public/css/styles.css dist/public/css/styles.css
rm dist/public/css/style.css