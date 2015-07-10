#Advanced JavaScript Continued

##Geolocation
- HTML5 gives you the capability to get a user's location based on the browser's best guess.
- This works ok for desktop browsers, but it is really meant for mobile browsers.
- On mobile browsers this can access the phone's GPS if available.
- Like many of the HTML5 JavaScript components, geolocation is appended to the `navigator` object:

```javascript
navigator.geolocation.getCurrentPosition(geoSuccess);
```

- The geoSuccess callback gets information about the position:

```javascript
function geoSuccess(position) {
	console.log(position.coords.latitude);
	console.log(position.coords.longitude);
}
```

- If the information is pulled from a phone GPS, you get additional information like heading and speed. Here is a [good reference](http://diveintohtml5.info/geolocation.html) for the API.

##Geolocation Exercise
- In this exercise we will use the geolocation api to render a Google Map of your current location.
- You will be using the [maps starter application](maps_starter_app/) as a starting point.
- Your goal is to write code in js/app.js and index.html that will render a map of your current location.

##AJAX
- AJAX is a way to create requests to the server from the front-end without performing a page refresh.
- It stands for Asynchronous JavaScript and XML.
- AJAX can be used to make RESTful calls to APIs.
- Let's look at a simple GET request:

```javascript
var oReq = new XMLHttpRequest();

oReq.onload = function() {
	console.log(this.responseText);
}

oReq.open("get", "URL HERE", true);
oReq.send();
```

##Introduction to Web Sockets
- One of the most powerful uses for Node is its ability to handle seamless "real-time" experiences.
- Sockets are a way for a browser and server to communicate without the standard request-response cycle.
- Chat clients, real-time data feeds, and operational dashboards are some examples of where sockets have been used effectively.

##How it Basically Works
- A client makes an initial request out to the server and a "handshake" is created - AKA a connection has been established.
- This "handshake" is given a unique socket with a unique ID.
- Essentially this request never completes and remains open for the duration of the session.
- Every further request-response simulation is done via a manifestation of a JavaScript event.
- In a perfect world this is how things would always operate with sockets but certain factors such as browser incompatibility and more can interfere with a proper handshake. As a result, a more brute-force approach of "polling" may be required.

##Socket.io
- Socket.io is a library that essentially manages browser capabilities to connect a client with a server through web sockets in the most ideal way possible.
- It can switch between polling and sockets automatically and basically automate the handshake process.
- Socket.io works on the client and the server side to achieve seamless interaction.

##Socket-Based Chat Mechanism

####The Client Setup
- The client will also use Socket.io to handle the handshake and any further events.
- The first thing that will be needed is to create the handshake with the server:

```javascript
var socket = io.connect("server_url or blank for current server");
```

- The client can also detect and respond to events:

```javascript
socket.on('event', function(params) { });
```

- The client can also "emit" events:

```javascript
socket.emit('event', params);
```

##In-Class Lab: Build the Chat
- In this lab we will be coding working to create a real-time chat application.
- The front end is already done for you [here](chat_starter_app/).
- You will be working in js/app.js to develop the code to interact with the web socket server.
- The server can be found at: http://arunchatserver.herokuapp.com/
- **Bonus:** Use your knowledge of front end JavaScript to change the page title when a new chat is received.