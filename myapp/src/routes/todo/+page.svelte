<script>
	import { Plus, Trash } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let { data } = $props();

	// $svelte runes = reaktivne
	let toggleNewNote = $state(false);
	let inputHeader = $state('');
	let inputDescription = $state('');

	onMount(() => {
		const storedNotes = localStorage.getItem('notes');
		if (storedNotes) {
			notes = JSON.parse(storedNotes);
		}
	});

	// []-array {}-objekt

	let notes = $state([]);

	// odchytenie funkcie
	function createNote() {
		let newID = crypto.randomUUID();
		notes = [...notes, { id: newID, header: inputHeader, description: inputDescription }];
		localStorage.setItem('notes', JSON.stringify(notes));
	}

	function deleteNote(id) {
		notes = notes.filter((note) => note.id !== id);
	}

	$effect(() => {
		if (!toggleNewNote) {
			inputHeader = '';
			inputDescription = '';
		}
	});
</script>

<main class=" h-screen w-full">
	<h1 class="p-20 text-center text-4xl font-bold">TO DO LIST</h1>

	<span class="block w-full border border-b-cyan-800"></span>
	<!-- button hoover ease-->
	<div class="flex w-full justify-center">
		<button
			onclick={() => {
				toggleNewNote = !toggleNewNote;
			}}
			class=" my-5 rounded-lg border bg-purple-600 p-4 font-semibold ease-linear hover:bg-purple-400"
			><Plus /></button
		>
	</div>
	{#if toggleNewNote}
		<div class="min-h-[250px] w-full px-10" transition:fade>
			<article
				class=" mx-auto mb-5 min-h-[200px] max-w-lg rounded-2xl border border-purple-400 bg-purple-600 p-10 shadow-2xl shadow-black duration-500 hover:border-b-8"
			>
				<!-- nadpsis -->
				<div class="flex flex-col items-center justify-center space-y-10">
					<input
						placeholder="Add title"
						type="text"
						class="rounded-2xl border bg-white p-2"
						bind:value={inputHeader}
					/>
					<input
						placeholder="Add description"
						type="text"
						class="rounded-2xl border bg-white p-2"
						bind:value={inputDescription}
					/>
				</div>
				<button
					onclick={createNote}
					class="mt-10 w-full rounded-xl border bg-white p-2 duration-300 hover:bg-gray-400 hover:text-white"
					>Create new note</button
				>
			</article>
		</div>
	{/if}

	<!-- note grid a gap -->
	<section class="mx-6 grid grid-cols-2 gap-6 px-4 lg:grid-cols-3">
		<!-- section  -->
		<!-- #each map etc.. -->

		{#each notes as note}
			<article class=" relative rounded-2xl bg-gray-400 p-4">
				<!-- BUTTON TRASH lucide -->

				<button
					onclick={() => deleteNote(note.id)}
					class=" absolute right-2 top-2 rounded-md bg-transparent p-1 hover:bg-white"
				>
					<Trash class=" stroke-3 size-6 text-red-700" />
				</button>
				<p class="absolute left-2 top-2 text-xs text-white">ID:{note.id}</p>

				<h1 class="p-2 text-center text-2xl font-bold text-white">{note.header}</h1>
				<!-- text -->
				<p class=" bg-gray-400 p-2" p>
					{note.description}
				</p>
			</article>
		{/each}
	</section>
</main>
