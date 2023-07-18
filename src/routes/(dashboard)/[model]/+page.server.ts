import { db } from '$lib/prisma.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const model = await db.model.findFirst({ where: { name: params.model } });
	if (!model) {
		throw error(404, { message: `Model ${params.model} could not be found` });
	}

	return { model };
}
