import { PermissionFlags } from '@/api/discord';
import { AppConfig } from './types';


export const config: AppConfig = {
  name: 'Swift Bot',
  icon: 'https://cdn.discordapp.com/attachments/1214016933725347860/1217838958323433623/Swift_mAIN-removebg-preview.png?ex=66057bea&is=65f306ea&hm=6b72e361d584f3ea027fd06f063759ae788afddb2fb80f245ebe4fa13953961c&',
  inviteUrl:
    'https://discord.com/api/oauth2/authorize?client_id=1070011901385375845&permissions=8&scope=bot',
  guild: {
    //filter guilds that user has no permissions to manage it
    filter: (guild) => (Number(guild.permissions) & PermissionFlags.ADMINISTRATOR) !== 0,
  },
};
