<script lang="ts">
	import { nav } from '$lib/stores/nav.js';
	import { onMount } from 'svelte';
	import GithubIcon from '$lib/icons/github-icon.svg';
	import LocationIcon from '$lib/icons/Location.svg';
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

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

<Section title="Versions" subTitle={`(${data.model.versions.length})`} class="mt-16">
	<Button link href={`/${data.model.name}/add-version`} class="mx-auto mt-6"
		>Add new Version +</Button
	>

	{#if data.model.versions.length != 0}
		<table class="mt-6 w-full table-auto rounded-md">
			<thead class="text-left">
				<tr>
					<th class="rounded-tl-md bg-indigo-500 px-6 py-3">Name</th>
					<th class="bg-indigo-500 px-6 py-3">Upload Date</th>
					<th class="rounded-tr-md bg-indigo-500 px-6 py-3">File</th>
				</tr>
			</thead>
			<tbody>
				{#each data.model.versions as version, i (version.id)}
					{@const urlSplit = version.binaryUrl.split('/')}
					<tr>
						<td
							class="px-6 py-3"
							class:bg-gray-700={i % 2 == 1}
							class:bg-gray-800={i % 2 == 0}
							class:rounded-bl-md={i == data.model.versions.length - 1}>{version.id}</td
						>
						<td class=" px-6 py-3" class:bg-gray-700={i % 2 == 1} class:bg-gray-800={i % 2 == 0}
							>{version.uploadedDate.toLocaleString()}</td
						>
						<td
							class="px-6 py-3"
							class:bg-gray-700={i % 2 == 1}
							class:bg-gray-800={i % 2 == 0}
							class:rounded-br-md={i == data.model.versions.length - 1}
							><a href={version.binaryUrl} class="underline">{urlSplit[urlSplit.length - 1]}</a></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</Section>

<Section title="Devices" subTitle={`(${data.model.devices.length})`} class="mt-16">
	<Button link href={`/${data.model.name}/add-device`} class="mx-auto mt-6">Add new Device +</Button
	>

	<div class="mt-6 grid auto-rows-fr grid-cols-3 gap-4">
		{#each data.model.devices as device (device.name)}
			<Card href={`/${data.model.name}/${device.name}`}>
				<h3 class="mb-4 text-lg font-semibold">{device.name}</h3>
				{#if device.location}
					<p class="flex items-center gap-2">
						<img src={LocationIcon} alt="location" class="h-auto w-4 dark:invert" />
						{device.location}
					</p>
				{/if}
				<div class="mt-2 flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16">
						<circle cx="10" cy="10" r="10" class="fill-red-500" />
					</svg>
					<p>OFFLINE</p>
				</div>
			</Card>
		{/each}
	</div>
</Section>
