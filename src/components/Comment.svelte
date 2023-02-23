<script>
	import Header from "./Header.svelte";
	import Score from "./Score.svelte";
	import Content from "./Content.svelte";
	import Edit from "./Edit.svelte";
	import { isEditing } from "../stores/editingStore";

	export let type, username, createdAt, userImage, content, counter, edit;

</script>

<section class={type == "reply" ? "is-reply" : ""}>
	<Score counter={counter} />
	<div>
		<Header
			username={username}
			createdAt={createdAt}
			userImage={userImage}
			edit={edit}
		/>
		<Content content={content} />
		<Edit content={content} />
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
