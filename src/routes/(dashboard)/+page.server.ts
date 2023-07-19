import { db } from '$lib/prisma';

export async function load() {
	return {
		models: await db.model.findMany()
	};
}
