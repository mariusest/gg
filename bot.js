require('dotenv').config();
const express = require('express');
const { verifyKeyMiddleware } = require('discord-interactions');
const { InteractionType, InteractionResponseType } = require('discord-interactions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.send('✅ Discord bot is running!');
});

// Discord interactions verification middleware
app.post('/interactions', 
  verifyKeyMiddleware(process.env.DISCORD_PUBLIC_KEY),
  handleInteractions
);

async function handleInteractions(req, res) {
  const interaction = req.body;

  // Handle PING verification from Discord
  if (interaction.type === InteractionType.PING) {
    console.log('✅ Received PING from Discord - Endpoint verified!');
    return res.json({ type: InteractionResponseType.PONG });
  }

  // Handle APPLICATION_COMMAND
  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    const { name } = interaction.data;

    if (name === 'ping') {
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: 'Pong! 🏓',
        },
      });
    }

    if (name === 'hello') {
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Hello <@${interaction.member.user.id}>! 👋`,
        },
      });
    }
  }

  // Default response
  return res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: 'Unknown command',
    },
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`✅ Bot server running on port ${PORT}`);
  console.log(`📍 Interactions endpoint: https://gg-mc0d.onrender.com/interactions`);
});
