// Create a new WebSocket connection
const socket = new WebSocket('ws://localhost:8080/websocket');

// Listen for the connection to open
socket.addEventListener('open', function (event) {
    console.log('Connected to WebSocket server');
});

// Listen for the connection to close
socket.addEventListener('close', function (event) {
    console.log('Disconnected from WebSocket server');
});

// Generate an ID for this client
const clientId = Math.random().toString(36).substring(2, 15);