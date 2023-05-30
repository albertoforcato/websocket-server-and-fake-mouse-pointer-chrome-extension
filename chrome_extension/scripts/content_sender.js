// Add event listener to mouse pointer
document.addEventListener('mousemove', function (event) {
  // Get the size of the window
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Calculate the relative position of the mouse
  const x = event.clientX / width;
  const y = event.clientY / height;

  // Send mouse position data to the server and the clientId
  socket.send(JSON.stringify({
    x: x,
    y: y,
    clientId: clientId,
    currentUrl: window.location.href
  }));
});