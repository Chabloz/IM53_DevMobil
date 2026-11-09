import { WSServerPubSub, WSServerError } from 'wsmini';

const wsServer = new WSServerPubSub({ port: 8888 });

// Add somme RPC endpoints
wsServer.addRpc('getMeteo', (clientData) => {
  // TODO_ validate clientData
  return {
    temperature: Math.round(Math.random() * 30),
    condition: 'Sunny',
    location: clientData?.location || 'Unknown'
  };
});

wsServer.addChannel('chat', {

  hookPub: (msg, clientMetadata, wsServer) => {
    // If you want to forbid publishing, on some condition, throw an WSServerError
    if (msg.length > 100) throw new WSServerError('Message too long');
    return {
      time: Date.now(),
      user: clientMetadata.id,
      msg
    }
  }
});

wsServer.start();