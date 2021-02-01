/* eslint-disable import/order */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const config = require('./config');

const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;
const twilioPhone = config.TWILIO_NUMBER;

const client = require('twilio')(accountSid, authToken);

// client.conversations.conversations
//   .create({ friendlyName: 'My First Conversation' })
//   .then((conversation) => console.log(conversation.sid));

// client.conversations.conversations('CH1382d7854b8048259cac810bb77467e4')
//   .fetch()
//   .then((conversation) => console.log(conversation.chatServiceSid));

// client.conversations.conversations('CH1382d7854b8048259cac810bb77467e4')
//   .participants
//   .create({
//     'messagingBinding.address': '+16124018245',
//     'messagingBinding.proxyAddress': twilioPhone,
//   })
//   .then((participant) => console.log(participant.sid));
client.conversations.conversations('CH1382d7854b8048259cac810bb77467e4')
  .participants
  .create({ identity: 'alex' })
  .then((participant) => console.log(participant.sid));
