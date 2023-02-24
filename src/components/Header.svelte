<script>
	import { comments } from "../stores/editingStore";
	import IconDelete from "./icons/icon-delete.svelte";
	import IconEdit from "./icons/icon-edit.svelte";
	import IconReply from "./icons/icon-reply.svelte";

	export let userImage, username, createdAt, edit, handleIsEditing;

</script>

<header>
	<div>
		<img src={userImage} alt="Profile" />
		<p class="username">{username}</p>
		<p>{createdAt}</p>
	</div>
	<div>
		{#if edit}
			<button>
				<IconDelete />
				Delete
			</button>
			<button on:click={() => handleIsEditing()}> 
				<IconEdit />
				Edit
			</button>
		{:else}
			<button>
				<IconReply />
				Reply
			</button>
		{/if}
	</div>
</header>

<style>
	header,
	div,
	button {
		display: flex;
	}
	header {
		align-items: center;
		justify-content: space-between;
	}
	button,
	button :global(path) {
		background: none;
		border: none;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-family: var(--font-family);
		font-size: var(--font-size);
		font-weight: 500;
		color: var(--color-moderate-blue);
		fill: var(--color-moderate-blue);
	}
	button:hover,
	button:hover :global(path) {
		color: var(--color-light-grayish-blue);
		fill: var(--color-light-grayish-blue);
	}
	div {
		align-items: center;
		gap: 1rem;
	}
	div img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}
	.username {
		color: var(--color-dark-blue);
		font-weight: 700;
	}
</style>
