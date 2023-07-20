<script lang="ts">
	export let variant: 'filled' | 'outline' = 'filled';
	export let size: 'lg' | 'sm' = 'lg';
	export let link = false;
	export let href = '#';
	export let submit = false;

	let clas = '';
	export { clas as class };

	$: sizeStyles = size == 'lg' ? 'px-7 py-3 text-lg' : 'px-4 py-2';
	$: variantStyles =
		variant == 'filled'
			? 'bg-indigo-500 text-white active:bg-indigo-400'
			: 'border-2 border-indigo-500 text-indigo-500 active:bg-gray-400 dark:active:bg-gray-700';
</script>

{#if link}
	<a
		{href}
		class={`${sizeStyles} ${variantStyles} block w-fit rounded-md font-semibold transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 dark:focus:ring-offset-gray-900 ${clas}`}
	>
		<slot />
	</a>
{:else}
	<button
		type={submit ? 'submit' : 'button'}
		class={`${sizeStyles} ${variantStyles} block w-fit rounded-md font-semibold transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-4 active:scale-90 dark:focus:ring-offset-gray-900 ${clas}`}
	>
		<slot />
	</button>
{/if}
