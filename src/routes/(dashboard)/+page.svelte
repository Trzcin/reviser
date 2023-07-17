<script>
	import EmptyIcon from '$lib/icons/EmptyIcon.svg';
	import { nav } from '$lib/stores/nav';
	import { onMount } from 'svelte';

	let models = [];

	onMount(() => ($nav = []));
</script>

<svelte:head>
	<title>Reviser</title>
	<meta name="description" content="System for managing OTA updates for embedded devices." />
</svelte:head>

<main class="mx-auto mt-24 max-w-5xl">
	<h2 class="text-2xl dark:text-white">Models</h2>
	<hr class="mt-2 h-1 rounded-md border-none bg-gray-600" />

	{#if models.length === 0}
		<div class="mt-12 flex flex-col items-center">
			<img src={EmptyIcon} alt="empty" class="dark:invert" />
			<p class="mt-3 text-gray-800 dark:text-gray-300">No models added yet.</p>
			<a
				href="/add-model"
				class="mt-6 rounded-md bg-indigo-500 px-7 py-3 text-lg font-semibold text-white transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 active:bg-indigo-400 dark:focus:ring-offset-gray-900"
				>Add new Model +</a
			>
		</div>
	{/if}
</main>
