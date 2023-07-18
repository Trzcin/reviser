import { db } from '$lib/prisma.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const repoUrl = data.get('gitUrl')?.toString();

		if (!name) {
			return fail(400, { missing: true });
		}

		if (await db.model.findFirst({ where: { name } })) {
			// name is taken
			return fail(400, { nameTaken: true });
		}

		await db.model.create({ data: { name, repoUrl } });

		throw redirect(303, `/${name}`);
	}
};
