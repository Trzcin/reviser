<script lang="ts">
	import Favicon from '$lib/icons/favicon.svg';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { nav } from '$lib/stores/nav';
	import { fly } from 'svelte/transition';
</script>

<nav class="flex items-center justify-between">
	<div class="flex items-center">
		<a
			href="/"
			class="flex items-center gap-2 text-xl font-semibold transition-colors hover:underline"
			class:text-indigo-500={$page.url.pathname === '/'}
			class:dark:text-gray-300={$page.url.pathname !== '/'}
		>
			<img src={Favicon} alt="icon" class="h-auto w-6 rounded-md" />
			Dashboard
		</a>
		{#each $nav as navItem}
			<div transition:fly={{ y: -100, duration: 400 }} class="flex items-center">
				<span class="ml-4 font-semibold dark:text-white">{'>'}</span>
				<a
					href={navItem.url}
					class="ml-4 block text-xl font-semibold hover:underline"
					class:text-indigo-500={$page.url.pathname === navItem.url}
					class:dark:text-gray-300={$page.url.pathname !== navItem.url}>{navItem.name}</a
				>
			</div>
		{/each}
	</div>

	<button class="flex items-center gap-2" on:click={() => signOut()}>
		<img src={$page.data.session?.user?.image} alt="profile" class="h-auto w-6" />
		<p class="font-semibold dark:text-white">{$page.data.session?.user?.name}</p>
	</button>
</nav>
