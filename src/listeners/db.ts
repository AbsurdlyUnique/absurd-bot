// src/listeners/db.ts

import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';

@ApplyOptions<Listener.Options>({})
export class UserEvent extends Listener {

	public constructor(context: Listener.Context) {
		super(context, { once: true });
	}

	public override run() {
		
		this.container.logger.info("Connected to the database.")
	}
}
