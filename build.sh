#!/bin/sh
# Requires the following to be installed globally:
# - node-sass
# - babel-cli

rm -rf dist/
mkdir -p dist/public/img dist/public/js dist/public/css
mkdir -p dist/views

node-sass sass/main.scss public/css/styles.css
babel public/js -d dist/public/js --presets=es2015

cp -r public/img/. dist/public/img
cp -r public/css/. dist/public/css
cp -r views/ dist/views
cp app.js dist/

cleancss -o dist/public/css/styles.css dist/public/css/styles.css
rm dist/public/css/style.css