/**
 * Utils
 */

// Add code-copy buttons using progressive enhancement
// © 2019. Tom Spencer
// https://www.fiznool.com/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
function flashCopyMessage(el, message) {
	el.textContent = message;
	setTimeout(function () {
		el.textContent = '{{ i18n "copy" }}';
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
	copyBtn.textContent = '{{ i18n "copy" }}';

	const codeEl = containerEl.firstElementChild;
	copyBtn.addEventListener('click', function () {
		try {
			const selection = selectText(codeEl);
			navigator.clipboard.writeText(selection);
			selection.removeAllRanges();

			flashCopyMessage(copyBtn, '{{ i18n "copied" }}')
		} catch (e) {
			console && console.log(e);
			flashCopyMessage(copyBtn, '{{ i18n "failed" }}')
		}
	});

	containerEl.appendChild(copyBtn);
}

// Add copy button to code blocks
if (navigator.clipboard) {
	window.onload = () => {
		const highlightBlocks = document.getElementsByClassName('highlight');
		for (let block of highlightBlocks) {
			addCopyButton(block);
		}
	};
}