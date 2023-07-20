<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import { nav } from '$lib/stores/nav';
	import { onMount } from 'svelte';

	onMount(
		() =>
			($nav = [
				{ name: $page.params.model, url: `/${$page.params.model}` },
				{ name: 'Add Device', url: `/${$page.params.model}/add-device` }
			])
	);
</script>

<svelte:head>
	<title>Reviser - {$page.params.model} - Add Device</title>
	<meta name="description" content="Add a new device for the {$page.params.mdoel} model." />
</svelte:head>

<form action="?/add" method="post" class="mx-auto w-fit" use:enhance>
	<FormInput required name="name" label="Name" />
	<FormInput name="gitUrl" label="Git Repo URL" placeholder="https://github.com/user/repo.git" />

	<div class="flex">
		<Button link href={`/${$page.params.model}`} size="sm" variant="outline">Cancel</Button>
		<Button submit size="sm" class="ml-4">Add Device +</Button>
	</div>
</form>
