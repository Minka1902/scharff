# Scharff Logger
This project was created by Michael Scharff for logging purposes.
The project is using the fetch-intercept NPM package.

## Installation
1) run `npm install scharff`.
2) fork the git repository 'https://github.com/Minka1902/scharff.git'.

## Usage
1) in your entry point, import unregister from the package.
const { unregister } = require('../../scharff/index');

## What to expect
The package will create a outgoingRequest.log file and start logging the requests to the file.

## Future additions
1) We will add the request error logger.
2) We will add the response logger.
3) We will add the response error logger.