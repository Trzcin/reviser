<script lang="ts">
	export let href = '#';
</script>

<a
	{href}
	class="block rounded-md bg-gray-800 px-7 py-3 transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 active:bg-gray-700 dark:focus:ring-offset-gray-900"
>
	<slot />
</a>
