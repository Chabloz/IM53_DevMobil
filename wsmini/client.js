import { WSClient } from 'wsmini';

const ws = new WSClient('ws://localhost:8888');
await ws.connect().catch(err => {
  console.error('Cannot connect to server. Try again later.');
  throw err;
});
console.log('Connection established!.');

const meteo = await ws.rpc('getMeteo', { location: 'London' });
console.log(`Weather in ${meteo.location}: ${meteo.temperature}°C, ${meteo.condition}`);

await ws.sub('chat', (message) => {
  console.log(`${message.user} (${new Date(message.time).toLocaleTimeString()}): ${message.msg}`);
});

setInterval(() => {
  ws.pub('chat', "I'm a bot !");
}, 5000)