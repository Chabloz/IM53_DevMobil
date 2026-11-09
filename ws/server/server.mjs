import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8888 });

server.on('connection', client => {
  console.log('Client connected');

  client.on('message', message => {
    console.log('Received:', message.toString());
    client.send('Message received!');
  });

  const timer = setInterval(() => {
    client.send(`Server time: ${new Date().toISOString()}`);
  }, 3000);

  client.on('close', () => {
    clearInterval(timer);
    console.log('Client disconnected');
  });

  client.on('error', error => console.error(error));
});