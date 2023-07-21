import { db } from '$lib/prisma.js';
import { redirect } from '@sveltejs/kit';
import { fail } from 'assert';

export const actions = {
	add: async ({ request, params }) => {
		const data = await request.formData();
		const name = data.get('name');
		const location = data.get('location');

		if (!name) {
			return fail(400, { missingName: true });
		}

		await db.device.create({
			data: {
				name: name.toString(),
				location: location?.toString(),
				token: crypto.randomUUID(),
				model: { connect: { name: params.model } }
			}
		});

		throw redirect(303, `/${params.model}/${name}`);
	}
};
