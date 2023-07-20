<script>
	import EmptyIcon from '$lib/icons/EmptyIcon.svg';
	import { nav } from '$lib/stores/nav';
	import { onMount } from 'svelte';
	import GithubIcon from '$lib/icons/github-icon.svg';
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data;

	onMount(() => ($nav = []));
</script>

<svelte:head>
	<title>Reviser</title>
	<meta name="description" content="System for managing OTA updates for embedded devices." />
</svelte:head>

<Section title="Models" subTitle={`(${data.models.length})`}>
	{#if data.models.length === 0}
		<div class="mt-12 flex flex-col items-center">
			<img src={EmptyIcon} alt="empty" class="dark:invert" />
			<p class="mt-3 text-gray-800 dark:text-gray-300">No models added yet.</p>
			<Button link href="/add-model" class="mt-6">Add new Model +</Button>
		</div>
	{:else}
		<Button link href="/add-model" class="mx-auto mt-6">Add new Model +</Button>

		<div class="mt-6 grid auto-rows-fr grid-cols-3 gap-4">
			{#each data.models as model (model.name)}
				<a
					href={`/${model.name}`}
					class="block rounded-md bg-gray-800 px-7 py-3 transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 active:bg-gray-700 dark:focus:ring-offset-gray-900"
				>
					<h3 class="text-lg font-semibold">{model.name}</h3>
					{#if model.repoUrl}
						<p class="mt-2 flex gap-2">
							<img src={GithubIcon} alt="github" />
							{model.repoUrl}
						</p>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</Section>
