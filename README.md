# POC - WebSocket Server and Fake Mouse Pointer Chrome Extension

This repository contains a WebSocket server written in Go and a Chrome extension that generates a fake mouse pointer in tabs. The fake pointers move based on the real position of other client's pointers.

## WebSocket Server

The WebSocket server is implemented in Go and acts as a central communication hub for the fake mouse pointer functionality. It uses the Gorilla WebSocket library to handle WebSocket connections.

### Prerequisites

- Go programming language (version 1.16 or later)
- Gorilla WebSocket library (can be installed using `go get github.com/gorilla/websocket`)

### Running the WebSocket Server

To run the WebSocket server, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `websocket-server` directory: `cd server`.
3. Open a terminal and run the following command: `go run main.go`.
4. The server will start running on the default port 8080.

## Fake Mouse Pointer Chrome Extension

The Chrome extension provided in this repository allows users to generate fake mouse pointers in their browser tabs. The pointers' movements are synchronized with the real positions of other clients' pointers.

### Prerequisites

- Google Chrome or Chromium-based browser

### Installation

To install the Chrome extension, follow these steps:

1. Clone this repository to your local machine (if you haven't already).
2. Open your Chrome browser.
3. Type `chrome://extensions` in the address bar and press Enter.
4. Enable the "Developer mode" option at the top right corner of the extensions page.
5. Click on the "Load unpacked" button.
6. Select the `chrome-extension` directory from the cloned repository.
7. The extension will be installed and ready to use.

### Usage

Once the extension is installed, you can use it to generate fake mouse pointers in your browser tabs. The pointers will move according to the real positions of other clients' pointers connected to the WebSocket server.

To start using the extension, follow these steps:

1. Ensure that the WebSocket server is running.
2. Open multiple tabs in your browser.
3. Move your real mouse pointer in any of the tabs.
4. You will see fake mouse pointers generated in other tabs, mimicking the movements of your real pointer.
5. The fake pointers are only visible within the browser and do not affect any other applications or systems.

## License

This repository is licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code as per the terms of the license.

## Contributions

Contributions to this repository are welcome. If you find any issues or have suggestions for improvements, please create a pull request or submit an issue in the GitHub repository.

## Acknowledgments

The WebSocket server implementation is built using the Gorilla WebSocket library, which provides a powerful and easy-to-use WebSocket framework for Go. Special thanks to the Gorilla WebSocket contributors for their valuable work.

The fake mouse pointer Chrome extension is inspired by the concept of collaborative browsing and is designed to demonstrate the synchronization of pointer positions using web technologies.