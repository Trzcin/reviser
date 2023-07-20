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
				{ name: 'Add Version', url: `/${$page.params.model}/add-version` }
			])
	);
</script>

<svelte:head>
	<title>Reviser - {$page.params.model} - Add Version</title>
	<meta name="description" content="Add a new version for the {$page.params.mdoel} model." />
</svelte:head>

<form action="?/add" method="post" class="mx-auto w-fit" use:enhance>
	<FormInput name="name" label="Name" />
	<FormInput name="file" label="File" />

	<div class="flex">
		<Button link href={`/${$page.params.model}`} size="sm" variant="outline">Cancel</Button>
		<Button submit size="sm" class="ml-4">Add Version +</Button>
	</div>
</form>
