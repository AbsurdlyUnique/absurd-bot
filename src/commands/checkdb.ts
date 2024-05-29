import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { pgStatActivity } from '../schema';
import { db } from '../lib/db';

@ApplyOptions<Command.Options>({
	description: 'A basic slash command'
})
export class UserCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description)
		);
	}

	public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		try {
			const result = await db.select().from(pgStatActivity);
			this.container.logger.info(result);
			return interaction.channel?.send('database connection established');
		} catch (error) {
			this.container.logger.fatal(error);
			return interaction.reply('An error occurred while executing this command.');
		}
	}
}
