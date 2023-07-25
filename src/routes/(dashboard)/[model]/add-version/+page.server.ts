import { db } from '$lib/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const actions = {
	add: async ({ request, params }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const file = data.get('file') as File | null;

		if (!name || !file) {
			return fail(400, { missingName: !name, missingFile: !file });
		}

		const filePath = `static/upload/${file.name.split('.')[0]}${Date.now().toString()}.${
			file.name.split('.')[1]
		}`;
		writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

		await db.version.create({
			data: {
				id: name,
				binaryUrl: `/${encodeURI(filePath)}`,
				model: {
					connect: {
						name: params.model
					}
				}
			}
		});

		throw redirect(303, `/${params.model}`);
	}
};
