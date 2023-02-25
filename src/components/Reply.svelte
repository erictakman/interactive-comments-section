<script>
	export let label, userImage;

</script>

<div class="flex items-start rounded-md gap-4">
	<img class="w-12 h-12" src={userImage} alt="Profile" />
	<textarea type="text" rows="4" autocomplete="off" placeholder="Add a message..." />
	<button class="send-button">
		{label}
	</button>
</div>

<style>
	div {
		background-color: var(--color-white);
		padding: 1rem;
	}
	textarea {
		width: 520px;
		padding: 0.5rem;
		color: var(--color-dark-blue);
		border: 1px solid var(--color-light-gray);
		border-radius: 0.5rem;
		resize: none;
	}
	textarea:focus {
		border-color: var(--color-grayish-blue);
	}
	button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: var(--color-moderate-blue);
		color: var(--color-white);
		text-transform: uppercase;
		cursor: pointer;
		width: fit-content;
	}
	button:hover {
		opacity: 0.5;
	}
</style>