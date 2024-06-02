// 匯入Discord.JS
import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config()

// 建立一個新的Client，所有特權網關意圖皆啟動
const client = new Client( { intents: [GatewayIntentBits.Guilds] } );

// 當機器人準備好時
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('error', console.error);
// 登入機器人
client.login(process.env.TOKEN);