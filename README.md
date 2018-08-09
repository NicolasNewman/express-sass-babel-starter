# express-sass-babel-starter
This repository is a straightforward boilerplate for building projects with ES6, Express, and Sass

## Features
* Sass support
* ES6 transpiling with Babel
* A script for compiling the project for production
* A live server that updates and reloads your browser when you make any change (including Sass!)

## Getting Started
```sh
# Download the repository
git clone https://github.com/NicolasNewman/express-sass-babel-starter.git
cd express-sass-babel-starter

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start a live server for development
npm run start:dev

# Compile the project for production
./build.sh

# Run the production version
npm run start:prod
```