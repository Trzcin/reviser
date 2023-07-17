<script lang="ts">
	import Favicon from '$lib/icons/favicon.svg';
	import GithubIcon from '$lib/icons/github-icon.svg';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	const animationTime = 300;
	let active = false;
	onMount(() => (active = true));
</script>

<svelte:head>
	<title>Reviser - Sign In</title>
	<meta name="description" content="Sign into REVISER with a github account" />
</svelte:head>

{#if active}
	<main class="mx-auto mt-24 flex w-fit flex-col items-center">
		<img
			src={Favicon}
			alt="logo"
			class="h-auto w-16"
			in:fly={{ x: -100, duration: animationTime }}
		/>

		<h1
			class="mt-6 text-3xl font-semibold tracking-[.25em] dark:text-gray-300"
			in:fly={{ x: -100, duration: animationTime, delay: animationTime }}
		>
			<span class="text-indigo-500">RE</span>VISER
		</h1>

		<button
			on:click={() => signIn('github')}
			class="mt-16 flex items-center gap-2 rounded-md bg-black px-7 py-3 transition-all hover:scale-125 active:scale-75 active:bg-gray-700"
			in:fly={{ x: -100, duration: animationTime, delay: animationTime * 2 }}
		>
			<img src={GithubIcon} alt="github" />
			<p class="text-lg text-white">Sign In with Github</p>
		</button>

		{#if $page.data.session}
			<p>yay</p>
		{/if}
	</main>
{/if}
