<script>
	import Header from "./Header.svelte";
	import Score from "./Score.svelte";
	import Content from "./Content.svelte";
	import Edit from "./Edit.svelte";

	export let type, username, createdAt, userImage, content, counter, isCurrentUser, id;

	let isEditing = false;

	const handleIsEditing = () => {
		isEditing = !isEditing;
	}

	const handleContent = (newContent) => {
		content = newContent
	}

	const handleDeleteComment = () => {
		console.log("delete");
	}

</script>

<section class={type == "reply" ? "is-reply" : ""}>
	<Score counter={counter} />
	<div>
		<Header
			id={id}
			username={username}
			createdAt={createdAt}
			userImage={userImage}
			isCurrentUser={isCurrentUser}
			handleIsEditing={handleIsEditing}
		/>
		<Content isEditing={isEditing} content={content} />
		<Edit isEditing={isEditing} handleContent={handleContent} handleIsEditing={handleIsEditing} content={content} />
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
