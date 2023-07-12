<script>
	import { signOut } from '@auth/sveltekit/client';
	import Favicon from '$lib/icons/favicon.svg';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Reviser</title>
	<meta name="description" content="System for managing OTA updates for embedded devices." />
</svelte:head>

<main class="container mx-auto mt-8 px-4">
	<nav class="flex items-center justify-between">
		<h1 class="flex items-center gap-2 text-2xl font-semibold text-indigo-400">
			<img src={Favicon} alt="icon" class="h-auto w-6" />
			Dashboard
		</h1>

		<button class="flex items-center gap-2" on:click={() => signOut()}>
			<img src={$page.data.session?.user?.image} alt="profile" class="h-auto w-6" />
			<p class="font-semibold text-white">{$page.data.session?.user?.name}</p>
		</button>
	</nav>
</main>
