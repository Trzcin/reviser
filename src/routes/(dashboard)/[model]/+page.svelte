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
					<td class="px-6 py-3" class:bg-gray-700={i % 2 == 1} class:bg-gray-800={i % 2 == 0}
						>{version.id}</td
					>
					<td class=" px-6 py-3" class:bg-gray-700={i % 2 == 1} class:bg-gray-800={i % 2 == 0}
						>{version.uploadedDate.toLocaleString()}</td
					>
					<td class="px-6 py-3" class:bg-gray-700={i % 2 == 1} class:bg-gray-800={i % 2 == 0}
						><a href={version.binaryUrl} class="underline">{urlSplit[urlSplit.length - 1]}</a></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</Section>

<Section title="Devices" class="mt-16">
	<Button link href={`/${data.model.name}/add-device`} class="mx-auto mt-6">Add new Device +</Button
	>

	{#each data.model.devices as device (device.name)}
		<p>{device.name}</p>
	{/each}
</Section>
