<script>
	import CommentHeader from "./CommentHeader.svelte";
	import CommentScore from "./CommentScore.svelte";
	import Content from "./Content.svelte";
	import Edit from "./Edit.svelte";

	export let type, username, createdAt, userImage, content, counter;

</script>

<section class={type == "reply" ? "is-reply" : ""}>
	<CommentScore counter={counter} />
	<div data-comment>
		<CommentHeader
			username={username}
			createdAt={createdAt}
			userImage={userImage}
		/>
		<Content content={content} />
		<Edit data-edit content={content} />
	</div>
</section>

<style>
	section,
	div {
		display: flex;
	}
	section {
		gap: 1.5rem;
		max-width: 700px;
		align-items: start;
		padding: 1.5rem;
		border-radius: 0.5rem;
		background-color: var(--color-white);
	}
	section.is-reply {
		max-width: 640px;
	}
	div {
		flex-direction: column;
		gap: 0.5rem;
	}
	section.is-reply :global(textarea) {
		width: 540px;
	}
</style>
