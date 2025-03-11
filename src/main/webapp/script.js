const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);

        // Broadcast the received message to all clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });

        // Simulate a bot reply after a short delay
        setTimeout(() => {
            const botReplies = [
                "That's interesting!",
                "Tell me more!",
                "I totally agree!",
                "That sounds amazing!",
                "Wow, really?",
                "Can you explain further?",
                "Haha, that's funny!",
                "I'm here to chat!",
                "How's your day going?",
                "Nice to hear from you!"
            ];
            const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
            ws.send(`Bot: ${randomReply}`);
        }, 1500); // 1.5-second delay to make it feel real
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
