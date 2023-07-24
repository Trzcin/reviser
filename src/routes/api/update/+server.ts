import { db } from '$lib/prisma.js';
import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';

export async function GET({ request }) {
	const authHeader = request.headers.get('authentication');
	if (!authHeader) {
		throw error(401, { message: 'You must provide a token in the Authorization header' });
	}
	const token = authHeader.split(' ')[1];
	if (!token) {
		throw error(401, { message: 'You must provide a token in the Authorization header' });
	}

	const device = await db.device.findFirst({ where: { token } });
	if (!device) {
		throw error(401, { message: 'Invalid token' });
	}

	const newestVersion = await db.version.findFirst({
		where: { modelName: device.modelId },
		orderBy: { uploadedDate: 'desc' }
	});
	if (!newestVersion || device.versionId === newestVersion.id) {
		return new Response(null, { status: 204 });
	}

	await db.device.update({
		where: { name: device.name },
		data: { version: { connect: { id: newestVersion.id } } }
	});

	// todo send file
	const filePath = newestVersion.binaryUrl.slice(1);
	const data = readFileSync(filePath);
	return new Response(data, { status: 200 });
}
