<script lang="ts">
	import Favicon from '$lib/icons/favicon.svg';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
</script>

<nav class="flex items-center justify-between">
	<a href="/">
		<h1 class="flex items-center gap-2 text-xl font-semibold text-indigo-500 dark:text-indigo-400">
			<img src={Favicon} alt="icon" class="h-auto w-6 rounded-md" />
			Dashboard
		</h1>
	</a>

	<button class="flex items-center gap-2" on:click={() => signOut()}>
		<img src={$page.data.session?.user?.image} alt="profile" class="h-auto w-6" />
		<p class="font-semibold dark:text-white">{$page.data.session?.user?.name}</p>
	</button>
</nav>
