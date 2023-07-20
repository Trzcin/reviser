export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		console.log('todo');
	}
};
