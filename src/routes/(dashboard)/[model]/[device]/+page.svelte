<script lang="ts">
	import { nav } from '$lib/stores/nav.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

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

<h1>{data.device.name}</h1>
<p>{data.device.token}</p>
