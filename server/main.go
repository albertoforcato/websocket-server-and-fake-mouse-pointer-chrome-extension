package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan []byte)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func main() {
	// Configure WebSocket route
	http.HandleFunc("/websocket", handleWebSocket)

	// Start listening for incoming WebSocket connections
	go handleMessages()

	// Start the server
	log.Println("Server started on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Error starting server:", err)
	}
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	// Upgrade initial GET request to a WebSocket
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error upgrading WebSocket:", err)
		return
	}

	// Add new WebSocket connection to clients map
	clients[conn] = true

	// Log new connection
	log.Println("New client connected")

	// Close WebSocket connection when function returns
	defer func() {
		delete(clients, conn)
		conn.Close()
	}()

	// Listen for WebSocket messages
	for {
		_, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("Error reading message:", err)
			break
		}

		// Send message to broadcast channel
		broadcast <- message
	}
}

func handleMessages() {
	for {
		// Get next message from broadcast channel
		message := <-broadcast

		// Send message to all WebSocket clients
		for client := range clients {
			err := client.WriteMessage(websocket.TextMessage, message)
			if err != nil {
				log.Println("Error sending message:", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
