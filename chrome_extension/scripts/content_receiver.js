// Create an array to store all the pointers
const pointers = [];

// Listen for incoming mouse position data from the server
socket.addEventListener('message', function (event) {
    // Get the current URL
    const currentUrl = window.location.href;

    // Parse the JSON data to get the mouse position and clientId
    const data = JSON.parse(event.data);
    const x = data.x;
    const y = data.y;
    const receivedClientId = data.clientId;
    const receivedUrl = data.currentUrl;

    if (receivedClientId === clientId) {
        // Ignore the data sent by this client
        return;
    }

    // Check if a pointer already exists for this client
    let pointer = pointers.find(p => p.clientId === receivedClientId);

    if (!pointer) {
        // Create a new pointer with a random emoji as the pointer
        pointer = document.createElement('div');
        pointer.innerHTML = ['👆', '👇', '👈', '👉'][Math.floor(Math.random() * 4)];
        pointer.style.fontSize = '20px';
        pointer.style.textAlign = 'center';
        pointer.style.lineHeight = '20px';

        // Set the position of the pointer element
        pointer.style.position = 'absolute';

        // Set random color for the pointer
        pointer.style.pointerEvents = 'none';
        pointer.style.zIndex = '1000000';
        pointer.style.transition = 'transform 0.2s ease-out';
        document.body.appendChild(pointer);

        // Add the pointer to the array
        pointers.push({ clientId: receivedClientId, pointer: pointer, currentUrl: receivedUrl });
    }

    // Check if the pointer is on the same page
    if (receivedUrl !== currentUrl) {
        // Hide the pointer if it is not on the same page
        pointer.pointer.style.display = 'none';
        return;
    }

    // Show the pointer if it is on the same page
    pointer.pointer.style.display = 'block';

    // Update the position of the pointer element
    const width = window.innerWidth;
    const height = window.innerHeight;
    pointer.pointer.style.left = (x * width - pointer.pointer.offsetWidth / 2) + 'px';
    pointer.pointer.style.top = (y * height - pointer.pointer.offsetHeight / 2) + 'px';

});