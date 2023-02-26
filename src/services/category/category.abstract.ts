import { PrismaClient } from '@prisma/client';

export abstract class Category {
	protected _counter: number;
	protected prisma = new PrismaClient();

	set counter(value: number) {
		this._counter = value;
	}
}
