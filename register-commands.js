require('dotenv').config();
const axios = require('axios');

const APPLICATION_ID = process.env.DISCORD_APPLICATION_ID;
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const commands = [
  {
    name: 'ping',
    description: 'Respond with Pong!',
  },
  {
    name: 'hello',
    description: 'Greet the user',
  },
];

async function registerCommands() {
  try {
    console.log('Registering slash commands...');
    
    const response = await axios.put(
      `https://discord.com/api/v10/applications/${APPLICATION_ID}/commands`,
      commands,
      {
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('✅ Commands registered successfully!');
    console.log(response.data);
  } catch (error) {
    console.error('❌ Error registering commands:');
    console.error(error.response?.data || error.message);
  }
}

registerCommands();
