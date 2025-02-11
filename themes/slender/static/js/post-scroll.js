/**
 * This tries valiantly to highlight the right section in the TOC. Does it work?
 * Yes. Is it fast? Eh, maybe?
 * NOTE: this assumes it's loaded async. Otherwise we'd use the DOMContentLoaded event.
 */

// map of elements to the IDs they represent
const elementToAsideElementMap = new Map();
const intersecting = new Set();
let highlightedHeader = null;

const observer = new IntersectionObserver((entries) => {
	// remove all now non-intersecting entries
	for (const entry of entries) {
		const header = entry.target;
		if (entry.isIntersecting) {
			intersecting.add(header);
		} else {
			intersecting.delete(header);
		}
	}

	let minClientTop = -1;
	let topElement = null;
	for (const element of intersecting) {
		let top = element.offsetTop;
		if (!topElement || top < minClientTop) {
			minClientTop = top;
			topElement = element;
		}
	}

	// already done - exit
	let headerToHighlight = elementToAsideElementMap.get(topElement);
	if (headerToHighlight === highlightedHeader) {
		return;
	}

	if (highlightedHeader) {
		highlightedHeader.classList.remove("active");
		highlightedHeader = null;
	}

	if (headerToHighlight) {
		headerToHighlight.classList.add("active");
		highlightedHeader = headerToHighlight;
	}
});

function getAsideElement(target) {
	const id = target.getAttribute("id");
	const asideElement = document.querySelector(`aside li a[href="#${id}"]`);
	return asideElement;
}

// Track all sections that have an `id` applied, but skip the last child since that's the sidenav
let currentAsideElement = null;
for (const element of document.querySelectorAll(
	".post-contents > *:not(:last-child)"
)) {
	if (element.tagName === "H2") {
		currentAsideElement = getAsideElement(element);
	}

	if (currentAsideElement) {
		elementToAsideElementMap.set(element, currentAsideElement);
		observer.observe(element);
	}
}

// Animate the progress bar
let progressBar = document.querySelector(".progress-bar");
if (progressBar) {
	let html = document.querySelector("html");
	let header = document.querySelector("header");
	const updateProgressBar = () => {
		// This is the only way I found to deal with the mobile address bar
		let effectiveScrollHeight = html.scrollHeight - window.innerHeight;
		// Only enable this when the post is big enough
		if (effectiveScrollHeight > 200) {
			let newHeight = Math.round(
				100 * (html.scrollTop / effectiveScrollHeight)
			);
			progressBar.style.width = `${newHeight}%`;
		} else {
			progressBar.style.width = "0";
		}
	};

	document.addEventListener("scroll", () => {
		updateProgressBar();
	});
	document.addEventListener("resize", () => {
		updateProgressBar();
	});
}
