<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import { nav } from '$lib/stores/nav';
	import { onMount } from 'svelte';

	onMount(() => ($nav = [{ name: 'Add Model', url: $page.url.pathname }]));
</script>

<svelte:head>
	<title>Reviser - Add Model</title>
	<meta name="description" content="Add a new device model." />
</svelte:head>

<form action="?/add" method="post" class="mx-auto w-fit" use:enhance>
	<FormInput required name="name" label="Name" />
	<FormInput name="gitUrl" label="Git Repo URL" placeholder="https://github.com/user/repo.git" />

	<div class="flex">
		<Button link href="/" size="sm" variant="outline">Cancel</Button>
		<Button submit size="sm" class="ml-4">Add Model +</Button>
	</div>
</form>
