<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';

	const transitionTime = 200;

	export let data;
	let lastUrl = data.url;
	let transitionDir = 1;

	$: {
		if (data.url.length > lastUrl.length) transitionDir = 1;
		else transitionDir = -1;

		lastUrl = data.url;
	}
</script>

<div class="container mx-auto my-6 px-4">
	<Navbar />
	{#key data.url}
		<main
			class="mx-auto mt-24 max-w-5xl"
			in:fly={{ x: 500 * transitionDir, duration: transitionTime, delay: transitionTime }}
			out:fly={{ x: -500 * transitionDir, duration: transitionTime }}
		>
			<slot />
		</main>
	{/key}
</div>
