<script>
	import { assets } from '$app/paths';
	import { Gem } from '@lucide/svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="m-auto max-w-6xl">
	<header class="border flex justify-between bg-violet-600 px-10">
		<span>
			<Gem class=" size-20 stroke-2 text-yellow-500" />
		</span>

		<div class="mx-7 text-3xl space-x-6 pt-6">
			<a class="font-bold" href="/">HOME</a>
			<a class="font-bold" href="/todo">TO DO</a>
			<a class="font-bold" href="/calc">CALCULATOR</a>
			<a class="font-bold" href="/">BACK</a>
			
		</div>
	</header>

	<main>
		{@render children()}
	</main>
</div>

<style>
	:global(body) {
		background-color: rgba(143, 167, 167, 0.699);
	}
</style>
