<script lang="ts">
	export let required = false;
	export let label = 'Input';
	export let name = 'input';
	export let error = '';
	export let placeholder = '';
</script>

<label for={name} class="block font-semibold dark:text-white">{label}</label>
<input
	type="text"
	{required}
	id={name}
	{name}
	{placeholder}
	class="mt-2 block w-[400px] rounded-md border border-gray-700 bg-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
/>
<span class="mb-6 block">{error}</span>
