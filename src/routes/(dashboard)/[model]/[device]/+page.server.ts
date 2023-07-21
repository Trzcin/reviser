import { db } from '$lib/prisma.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const device = await db.device.findFirst({ where: { name: params.device } });
	if (!device) throw error(404, { message: 'Device not found' });

	return { device };
}
