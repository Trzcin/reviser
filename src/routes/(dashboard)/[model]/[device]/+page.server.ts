import { db } from '$lib/prisma.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const device = await db.device.findFirst({
		where: { name: params.device },
		include: { version: true }
	});

	if (!device) throw error(404, { message: 'Device not found' });
	if (!device.versionId) return { device };

	const latestVersion = await db.version.findFirst({
		where: { modelName: device.modelId },
		orderBy: { uploadedDate: 'desc' }
	});
	if (!latestVersion) return { device };

	const isLatest = latestVersion.id == device.version?.id;

	return { device, latestVersion: isLatest };
}
