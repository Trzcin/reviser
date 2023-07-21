<script lang="ts">
	import { nav } from '$lib/stores/nav.js';
	import { onMount } from 'svelte';
	import GithubIcon from '$lib/icons/github-icon.svg';
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data;

	onMount(() => ($nav = [{ name: data.model.name, url: `/${data.model.name}` }]));
</script>

<svelte:head>
	<title>Reviser - {data.model.name}</title>
	<meta name="description" content="See details of the {data.model.name} device model" />
</svelte:head>

<h1 class="text-3xl font-bold">{data.model.name}</h1>
{#if data.model.repoUrl}
	<a href={data.model.repoUrl} class="mt-4 flex items-center gap-2 underline" target="_blank">
		<img src={GithubIcon} alt="github" />
		{data.model.repoUrl}
	</a>
{/if}

<Section title="Versions" class="mt-16">
	<Button link href={`/${data.model.name}/add-version`} class="mx-auto mt-6"
		>Add new Version +</Button
	>

	{#each data.model.versions as version (version.id)}
		<p>{version.id}</p>
	{/each}
</Section>

<Section title="Devices" class="mt-16">
	<Button link href={`/${data.model.name}/add-device`} class="mx-auto mt-6">Add new Device +</Button
	>

	{#each data.model.devices as device (device.name)}
		<p>{device.name}</p>
	{/each}
</Section>
