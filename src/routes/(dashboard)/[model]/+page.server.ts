import { db } from '$lib/prisma.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const model = await db.model.findFirst({
		where: { name: params.model },
		include: { versions: true, devices: true }
	});
	if (!model) {
		throw error(404, { message: `Model ${params.model} could not be found` });
	}

	model.versions.sort((m1, m2) => m2.uploadedDate.getTime() - m1.uploadedDate.getTime());

	return { model };
}
