import { WebSocketServer } from 'ws';
import {prisma} from '@repo/db/db'

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', async function incoming(message) {
    console.log('received: %s', message);
    await prisma.user.create({
        data:{
            name:Math.random().toString(),
            passwrod:Math.random().toString()
        }
    })
  });

  ws.send('something');
});