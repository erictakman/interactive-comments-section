<script>
	import IconPlus from "./icons/icon-plus.svelte";
	import IconMinus from "./icons/icon-minus.svelte";

	export let counter;

</script>

<aside>
	<button on:click={() => counter++} data-counterIncrease>
		<IconPlus />
	</button>
	<p>{counter}</p>
	<button on:click={() => counter--}>
		<IconMinus />
	</button>
</aside>

<style>
	aside {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--color-light-gray);
		padding: 1rem 0.5rem;
		border-radius: 0.5rem;
		gap: 0.5rem;
	}
	p {
		color: var(--color-moderate-blue);
		font-weight: 500;
	}
	button {
		display: flex;
		width: 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
	button :global(path) {
		fill: var(--color-light-grayish-blue);
	}
	button:hover :global(path) {
		fill: var(--color-moderate-blue);
	}
	
</style>