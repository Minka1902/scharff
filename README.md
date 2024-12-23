# Scharff Logger
Scharff is a lightweight and versatile Node.js package designed to enhance your application's logging capabilities by seamlessly integrating a powerful outgoing request logger. With Scharff, you can effortlessly gain insights into the interactions your application has with external services, APIs, and resources.

## Installation
1) run `npm install scharff`.
2) fork the git repository `https://github.com/Minka1902/scharff.git`, and place it next to your project.

## Usage
1) in your entry point, import unregister from the package: `const listen = require('scharff');`
2) to stop the logger just run the unregister function: `listen()`, or `npm uninstall scharff` in the terminal.

## What to expect
1) The package will create a outgoingRequest.log file and start logging the requests to the file.
2) In there you can see the fetch requests you sent.
3) The request will be in the format below:</br>
{</br>
&nbsp;&nbsp;&nbsp;&nbsp;"url":"http://666.777.888.999:3000/update/www.exampe.com",</br>
&nbsp;&nbsp;&nbsp;&nbsp;"ip":"130.130.130.130",</br>
&nbsp;&nbsp;&nbsp;&nbsp;"date":{</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date:"20/20/2020",</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time:"20:20:20 PM"</br>
&nbsp;&nbsp;&nbsp;&nbsp;},</br>
&nbsp;&nbsp;&nbsp;&nbsp;"originUrl":"/update/www.example.com",</br>
&nbsp;&nbsp;&nbsp;&nbsp;"method":"PUT",</br>
&nbsp;&nbsp;&nbsp;&nbsp;"headers":{</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Content-Type":"application/json",</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Access-Control-Allow-Origin":"*"</br>
&nbsp;&nbsp;&nbsp;&nbsp;},</br>
&nbsp;&nbsp;&nbsp;&nbsp;"body":{</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"isActive":true,</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status":200,</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lastChecked":"2020-20-20T20:20:20.200Z"</br>
&nbsp;&nbsp;&nbsp;&nbsp;}</br>
}

## New in this release
1) Fixed a bug in the installation

## Requirements
1) nodejs version >= v18.0.0

## Future additions
1) Set the log file name
2) Request error logger
3) Response logger
4) Response error logger
