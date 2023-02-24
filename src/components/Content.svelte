<script>
	export let content, isEditing;

</script>

{#if !isEditing}
	<p>{content}</p>
{/if}