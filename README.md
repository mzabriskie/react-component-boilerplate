# react-component-boilerplate

Boilerplate for creating React components

__NOTICE:__ This boilerplate is outdated, and will not receive any updates. Take a look at [rackt-cli](https://github.com/mzabriskie/rackt-cli) instead.

## Installing

```bash
$ git clone https://github.com/mzabriskie/react-component-boilerplate.git
$ npm install
```

## Building

Start webpack

```bash
$ npm start
# or
$ ./script/build
```

## Testing

Start karma

```bash
$ npm test
# or
$ ./script/test --auto-watch
```

## Running

A simple example is setup to run out of the box

```bash
$ npm start
$ open example/index.html
```


## Setup

You'll need to change a few things

```bash
# Delete .git
$ cd react-component-boilerplate
$ rm -rf .git

# Update package.json and bower.json
# name, version, description, repository, keywords, author, license, bugs, homepage
$ vim package.json
$ vim bower.json

# Update webpack.config.js
$ vim webpack.config.js

# Update build script
$ vim script/build

# Rename lib/example.js
$ mv lib/example.js lib/whatever.js
$ vim index.js
$ vim example/index.html
$ vim specs/example.spec.js

# Rename specs/example.spec.js
$ mv specs/example.spec.js specs/whatever.spec.js
$ vim specs/main.js
```
