<script>
	export let type, userImage;

</script>

<div>
	<img src={userImage} alt="Profile" />
	<button class="send-button">
		{type == "send" ? "Send" : "Reply"}
	</button>
	<input />
</div>