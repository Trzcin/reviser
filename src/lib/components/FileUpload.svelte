<script lang="ts">
	import UploadIcon from '$lib/icons/Upload.svg';

	export let name = 'file';
	export let label = 'File';
	export let required = false;
	export let accept = '';

	let input: HTMLInputElement;
	let dragging = false;
	let dragCounter = 0;

	$: dragStyles = dragging ? 'bg-gray-700' : '';
	$: dropZoneText = dragging
		? 'Drop it Here'
		: !input || !input.files || input.files.length == 0
		? 'Upload a File'
		: input.files[0].name;

	function handleFileDrop(e: DragEvent) {
		dragging = false;
		if (!e.dataTransfer?.files) return;
		input.files = e.dataTransfer.files;
	}

	function handleFileChange() {
		if (!input || !input.files) return;

		dropZoneText = input.files[0].name;
	}
</script>

<label for={name} class="font-semibold">{label}</label>
<input
	type="file"
	{name}
	id={name}
	{required}
	class="hidden"
	{accept}
	bind:this={input}
	on:change={handleFileChange}
/>
<label
	for={name}
	class={`${dragStyles} mt-2 flex w-full cursor-pointer flex-col items-center gap-2 rounded-md border-2 border-dashed border-gray-500 px-7 py-3 transition-all`}
	on:dragover|preventDefault|stopPropagation
	on:drop|preventDefault|stopPropagation={handleFileDrop}
	on:dragenter|stopPropagation={() => {
		dragging = true;
		dragCounter++;
	}}
	on:dragleave|stopPropagation={() => {
		dragCounter--;
		if (dragCounter == 0) dragging = false;
	}}
>
	<img src={UploadIcon} alt="upload" class="h-auto w-4 dark:invert" />
	<p>{dropZoneText}</p>
</label>
