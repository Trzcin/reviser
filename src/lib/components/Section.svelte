<script lang="ts">
	export let title = 'Section';
	export let subTitle = '';
	let clas = '';
	export { clas as class };
</script>

<h2 class={`text-2xl dark:text-white ${clas}`}>
	{title} <span class="text-gray-400">{subTitle}</span>
</h2>
<hr class="mt-2 h-1 rounded-md border-none bg-gray-600" />
<slot />
