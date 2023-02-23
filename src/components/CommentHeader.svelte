<script>
	import IconReply from "./icons/icon-reply.astro";

	export let userImage,	username, createdAt;

</script>

<header>
	<div>
		<img src={userImage} alt="Profile" />
		<p class="username">{username}</p>
		<p>{createdAt}</p>
	</div>
	<button class="reply-button">
		<IconReply />
		Reply
	</button>
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