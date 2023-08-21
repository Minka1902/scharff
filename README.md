# Scharff Logger
This project was created by Michael Scharff for logging purposes.
The project is using the fetch-intercept NPM package.

## Installation
1) run `npm install scharff`.
2) fork the git repository `https://github.com/Minka1902/scharff.git`, and place it next to your project.

## Usage
1) in your entry point, import unregister from the package: `const { unregister } = require('../../scharff/index');`
2) to stop the logger just run the unregister function: `unregister()`

## What to expect
The package will create a outgoingRequest.log file and start logging the requests to the file.

## Future additions
1) We will add a request error logger.
2) We will add a response logger.
3) We will add a response error logger.