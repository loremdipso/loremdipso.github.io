<script lang="ts">
	import FullscreenContainer from "../lib/FullscreenContainer.svelte";
	import Bar from "../lib/Bar.svelte";
	import nlp from "compromise";
	import plg from "compromise-speech";
	nlp.extend(plg);

	let fullscreen = false;
	let value: string =
		"There was a man from Californ-ya\nWho really did try to warny ya\nSo turn off the light\nWhen you say goodnight\nOr you'll wish you'd a done it earl-ya";

	function get_lines(str: string) {
		return str.split(/\r?\n/).map(get_bars);
	}

	function get_bars(line: string) {
		const doc = nlp(line);
		doc.compute("syllables");
		const bars = [];
		for (const line of doc.document) {
			for (const word of line) {
				for (const syllable of word["syllables"]) {
					bars.push(syllable);
				}
			}
		}
		return bars;
	}

	$: lines = get_lines(value);
</script>

<FullscreenContainer bind:fullscreen>
	<div class="container" class:fullscreen>
		{#if !fullscreen}
			<p>
				Need help writing some gnarly bars?? Well hip hop helper is here
				to hip hop help you out! Just input your text and we'll split it
				up into syllables.
			</p>
		{/if}

		<textarea bind:value />

		<div class="bars">
			<table class="inner">
				{#each lines as line}
					<tr class="line">
						{#each line as bar}
							<td>
								<Bar value={bar} />
							</td>
						{/each}
					</tr>
				{/each}
			</table>
		</div>
	</div>
</FullscreenContainer>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		background-color: black;

		textarea,
		.bars {
			font-size: 1rem;
			color: white;
			background-color: black;
		}

		&.fullscreen {
			textarea,
			.bars {
				height: 50vh;
				overflow: auto;
			}

			.bars .inner {
				text-align: center;
				padding: 1rem;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}

	.line {
		margin: 0.5rem 0;
	}

	table,
	td,
	tr {
		all: revert;
	}
</style>
