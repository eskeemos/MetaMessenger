import Pusher from "pusher";
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: 'eu',
  useTLS: true
})

export const clientPusher = new ClientPusher('ac5eabfcd2e56e302b7b', {
  cluster: 'eu',
  forceTLS: true
})