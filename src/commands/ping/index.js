import { SlashCommandBuilder } from 'discord.js';

export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('檢視機器人延遲');

// 設定事件（ACTION）
export const action = async (ctx) => {
    await ctx.reply('Pong!');
}