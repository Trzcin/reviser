<script>
	import { page } from '$app/stores';
	import FormInput from '$lib/components/FormInput.svelte';
	import { nav } from '$lib/stores/nav';
	import { onMount } from 'svelte';

	onMount(() => ($nav = [{ name: 'Add Model', url: $page.url.pathname }]));
</script>

<svelte:head>
	<title>Reviser - Add Model</title>
	<meta name="description" content="Add a new device model." />
</svelte:head>

<form action="?/add" method="post" class="mx-auto mt-24 w-fit">
	<FormInput required name="name" label="Name" />
	<FormInput name="gitUrl" label="Git Repo URL" placeholder="https://github.com/user/repo.git" />

	<div class="flex">
		<a
			href="/"
			class="rounded-md border-2 border-indigo-500 px-4 py-2 font-semibold text-indigo-500 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 active:bg-gray-400 dark:focus:ring-offset-gray-900 dark:active:bg-gray-700"
			>Cancel</a
		>
		<button
			type="submit"
			class="ml-4 rounded-md bg-indigo-500 px-4 py-2 font-semibold text-white transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 active:bg-indigo-400 dark:focus:ring-offset-gray-900"
			>Add Model +</button
		>
	</div>
</form>
