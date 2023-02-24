<script>
	import IconDelete from "./icons/icon-delete.svelte";
	import IconEdit from "./icons/icon-edit.svelte";
	import IconReply from "./icons/icon-reply.svelte";

	export let userImage, username, createdAt, isCurrentUser, handleIsEditing, handleIsReplying, handleDeleteComment;

</script>

<header>
	<div>
		<img src={userImage} alt="Profile" />
		<p class="username">{username}</p>
		{#if isCurrentUser}
			<p class="bg-[var(--color-moderate-blue)] -ml-1 p-0.5 px-1.5 rounded-sm text-[var(--color-white)] text-sm">you</p>
		{/if}
		<p>{createdAt}</p>
	</div>
	<div>
		{#if isCurrentUser}
			<button class="delete" on:click={() => handleDeleteComment()}>
				<IconDelete />
				Delete
			</button>
			<button on:click={() => handleIsEditing()}> 
				<IconEdit />
				Edit
			</button>
		{:else}
			<button on:click={() => handleIsReplying()}>
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
	.delete, .delete :global(path) {
		color: var(--color-soft-red);
		fill: var(--color-soft-red);
	}
	button:hover {
		opacity: 0.5;
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
