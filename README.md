# Scharff Logger
Scharff is a lightweight and versatile Node.js package designed to enhance your application's logging capabilities by seamlessly integrating a powerful outgoing request logger. With Scharff, you can effortlessly gain insights into the interactions your application has with external services, APIs, and resources.

## Installation
1) run `npm install scharff`.
2) fork the git repository `https://github.com/Minka1902/scharff.git`, and place it next to your project.

## Usage
1) in your entry point, import unregister from the package: `const { unregister } = require('scharff');`
2) to stop the logger just run the unregister function: `unregister()`, or `npm uninstall scharff`.

## What to expect
1) The package will create a outgoingRequest.log file and start logging the requests to the file.
2) In there you can see the fetch requests you sent.
3) The request will be in the format below:</br>
{</br>
&nbsp;&nbsp;&nbsp;&nbsp;    "url":"http://www.example.com/update/ad423kbr1om82hu3d58a73g4",</br>
&nbsp;&nbsp;&nbsp;&nbsp;    "originUrl":"/update/ad423kbr1om82hu3d58a73g4",</br>
&nbsp;&nbsp;&nbsp;&nbsp;    "method":"GET",</br>
&nbsp;&nbsp;&nbsp;&nbsp;    "headers":   </br>
&nbsp;&nbsp;&nbsp;&nbsp;    {</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        "Content-Type":"application/json",</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        "Access-Control-Allow-Origin":"*"</br>
&nbsp;&nbsp;&nbsp;&nbsp;    },</br>
&nbsp;&nbsp;&nbsp;&nbsp;    "body":      </br>
&nbsp;&nbsp;&nbsp;&nbsp;    {</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        "isActive":true,</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        "status":200,</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        "date":"2023-08-21T11:25:47.023Z"</br>
&nbsp;&nbsp;&nbsp;&nbsp;    }</br>
}

## Next release
1) 

## Requirements
1) nodejs version >= v18.0.0

## Future additions
1) We will add a request error logger.
2) We will add a response logger.
3) We will add a response error logger.
