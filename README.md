# react-component-boilerplate

Boilerplate for creating React components

## Setup

1. Clone boilerplate
	- `$ git clone https://github.com/mzabriskie/react-component-boilerplate.git`
1. Delete .git
	- `$ cd react-component-boilerplate && rm -rf .git`
1. Install dependencies
	- `$ npm install`
1. Update `package.json`
	- `name`
	- `version`
	- `description`
	- `repository`
	- `keywords`
	- `author`
	- `license`
	- `bugs`
	- `homepage`
1. Rename `lib/example.js`
	- `$ mv lib/example.js lib/whatever.js`
	- `$ vim lib/main.js`
	- `$ vim example/main.js`
	- `$ vim specs/example.spec.js`
1. Rename `specs/example.spec.js`
	- `$ mv specs/example.spec.js specs/whatever.spec.js`
	- `$ vim specs/main.js`

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