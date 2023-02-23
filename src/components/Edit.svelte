<script>
	import { isEditing } from "../stores/editingStore";
	export let content;

</script>

{#if $isEditing}
	<textarea autocomplete="false" rows="4">
		{content}
	</textarea>
	<button on:click={() => isEditing.set(false)}>Update</button>
{/if}

<style>
	textarea {
		width: 600px;
		padding: 0.5rem;
		color: var(--color-dark-blue);
		border: 1px solid var(--color-grayish-blue);
		border-radius: 0.5rem;
		resize: none;
	}
	button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: var(--color-moderate-blue);
		color: var(--color-white);
		text-transform: uppercase;
		cursor: pointer;
		align-self: flex-end;
		width: fit-content;
	}
</style>