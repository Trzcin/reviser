import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const checkAuth: Handle = async ({ event, resolve }) => {
	if (!event.url.pathname.startsWith('/sign-in') && !event.url.pathname.startsWith('/api')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/sign-in');
		}
	}

	return resolve(event);
};

export const handle = sequence(
	SvelteKitAuth({
		providers: [Github({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
	}),
	checkAuth
);
