<script lang="ts">
	export let value: string;
</script>

{#key value}
	<div class="bar fade-in">
		{value}
	</div>
{/key}

<style lang="scss">
	.bar {
		padding: 0 0.5rem;
		margin: 0 0.1rem;
		background-color: #303030;
		text-align: center;
	}

	.fade-in {
		animation: fadeIn 0.4s;
	}

	@keyframes fadeIn {
		0% {
			background-color: #f9e076;
		}
	}
</style>
