<script lang="ts">
	import { nav } from '$lib/stores/nav.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import LocationIcon from '$lib/icons/Location.svg';
	import KeyIcon from '$lib/icons/Key.svg';

	export let data;

	onMount(
		() =>
			($nav = [
				{ name: $page.params.model, url: `/${$page.params.model}` },
				{ name: data.device.name, url: `/${$page.params.model}/${data.device.name}` }
			])
	);
</script>

<svelte:head>
	<title>Reviser - {$page.params.model} - {data.device.name}</title>
	<meta
		name="description"
		content="View details of {data.device.name} device from {$page.params.model} model"
	/>
</svelte:head>

<header class="flex items-center gap-6">
	<h1 class="text-3xl font-bold">{data.device.name}</h1>
	<p class="flex items-center gap-2">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16">
			<circle
				cx="10"
				cy="10"
				r="10"
				class:fill-red-500={!data.device.online}
				class:fill-green-500={data.device.online}
			/>
		</svg>
		{#if data.device.online}
			ONLINE
		{:else}
			OFFLINE
		{/if}
	</p>
</header>

{#if data.device.versionId}
	<p class="mt-8 flex items-center gap-4 font-bold">
		{data.device.versionId}
		{#if data.latestVersion}
			<span class="rounded-md bg-indigo-500 px-4 py-1 font-semibold">&#10004; latest</span>
		{/if}
		<span class="font-normal italic text-gray-400"
			>last updated: {data.device.lastUpdated?.toLocaleString()}</span
		>
	</p>
{/if}

{#if data.device.location}
	<p class="mt-4 flex items-center gap-2">
		<img src={LocationIcon} alt="device location" class="dark:invert" />
		{data.device.location}
	</p>
{/if}

<div class="mt-8 rounded-md border-2 border-indigo-500 bg-indigo-500 bg-opacity-30 px-8 py-4">
	<h2 class="flex items-center gap-2 text-lg font-semibold">
		<img src={KeyIcon} alt="token" class="h-auto w-5 dark:invert" />
		Device API Token
	</h2>
	<p class="mt-2">{data.device.token}</p>
</div>
