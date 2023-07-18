<script lang="ts">
	import { nav } from '$lib/stores/nav.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => ($nav = [{ name: data.model.name, url: `/${data.model.name}` }]));
</script>

<h1>Viewing the Model Page For {data.model.name}</h1>
{#if data.model.repoUrl}
	<h1>With Repo Url {data.model.repoUrl}</h1>
{/if}
