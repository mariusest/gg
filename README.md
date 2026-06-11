# Discord Bot with Interactions Endpoint

A Discord bot deployed on Render with a working interactions endpoint.

## ⚡ Quick Setup

### Step 1: Get Your Discord Credentials
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click on your application
3. Copy these values:
   - **General Information** tab → `APPLICATION ID` and `PUBLIC KEY`
   - **Bot** tab → `TOKEN`

### Step 2: Add Environment Variables to Render
1. Go to your Render service dashboard
2. Click **Environment**
3. Add these variables:
   - `DISCORD_PUBLIC_KEY` = your public key
   - `DISCORD_BOT_TOKEN` = your bot token
   - `DISCORD_APPLICATION_ID` = your application ID
4. Deploy

### Step 3: Set Interactions Endpoint URL in Discord Developer Portal
1. Go to your app in [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **General Information**
3. Scroll to **Interactions Endpoint URL**
4. Enter: `https://gg-mc0d.onrender.com/interactions`
5. Click **Save Changes**
6. Discord will verify the URL ✅

### Step 4: Create Slash Commands
Run in your terminal:
```bash
node register-commands.js
```

This registers:
- `/ping` - responds with "Pong! 🏓"
- `/hello` - greets you

## ✅ Testing
1. Invite your bot to a test server
2. Try `/ping` or `/hello`
3. Bot should respond!

## 🐛 Troubleshooting

**"Interactions Endpoint URL could not be verified"**
- Check environment variables are set correctly in Render
- Make sure bot is deployed and running
- Check Render logs for errors

**Bot not responding**
- Verify slash commands are registered
- Check bot has permissions in server
- Check Render logs

## 📁 Files
- `bot.js` - Main bot server
- `register-commands.js` - Register slash commands
- `package.json` - Dependencies
- `.env.example` - Environment variable template
