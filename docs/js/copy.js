// Add code-copy buttons using progressive enhancement
// © 2019. Tom Spencer
// https://www.fiznool.com/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
function flashCopyMessage(el, message) {
	el.textContent = message;
	setTimeout(function () {
		el.textContent = "Copy";
	}, 1000);
}

function selectText(node) {
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(node);
	selection.removeAllRanges();
	selection.addRange(range);
	return selection;
}

function addCopyButton(containerEl) {
	const copyBtn = document.createElement("button");
	copyBtn.className = "copy-button";
	copyBtn.textContent = "Copy";

	const codeEl = containerEl.firstElementChild;
	copyBtn.addEventListener("click", function () {
		try {
			const selection = selectText(codeEl);
			navigator.clipboard.writeText(selection);
			selection.removeAllRanges();

			flashCopyMessage(copyBtn, "Copied!");
		} catch (e) {
			console && console.log(e);
			flashCopyMessage(copyBtn, "Failed");
		}
	});

	containerEl.insertBefore(copyBtn, codeEl);
}

// Add copy button to code blocks
if (navigator.clipboard) {
	window.addEventListener("DOMContentLoaded", () => {
		const highlightBlocks = document.querySelectorAll("pre[data-lang]");
		for (let block of highlightBlocks) {
			addCopyButton(block);
		}
	});
}
