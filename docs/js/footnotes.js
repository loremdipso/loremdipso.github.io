const setup_footnotes = () => {
  const article = document.querySelector("article");
  if (!article) {
    return;
  }

  let currentFootnoteId = null;
  const footnoteLinks = document.querySelectorAll(".footnote-reference a");
  footnoteLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove any existing footote popup
      document
        .querySelectorAll(".inline-footnote-popup")
        .forEach((p) => p.remove());

      // Grab the footnote
      const targetId = decodeURIComponent(
        link.getAttribute("href").substring(1),
      );

      // Double clicking the same footnote should close it.
      if (targetId == currentFootnoteId) {
        currentFootnoteId = null;
        return;
      }
      currentFootnoteId = targetId;

      const targetLi = document.getElementById(targetId);
      if (!targetLi) {
        return;
      }

      // Clone so our changes are non-destructive
      const contentClone = targetLi.cloneNode(true);

      // Strip out the backreference link (the ↩ icon)
      const backRef = contentClone.querySelector(".footnote-backref");
      if (backRef) {
        backRef.remove();
      }

      // Remove the number header
      const label = contentClone.querySelector(".footnote-definition-label");
      if (label) {
        label.remove();
      }

      // Create the popup container
      const popup = document.createElement("div");
      popup.className = "inline-footnote-popup";
      popup.innerHTML = contentClone.innerHTML;

      // Append to article to inherit those styles
      article.appendChild(popup);

      // Position the popup right above or below the clicked element
      // TODO: is this correct?
      const rect = this.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY + 8}px`;
      popup.style.left = `${Math.max(10, Math.min(rect.left + window.scrollX - 40, window.innerWidth - popup.offsetWidth - 10))}px`;

      // Prevent clicking inside the popup from closing it immediately
      // TODO: is this what we want?
      popup.addEventListener("click", (e) => e.stopPropagation());
    });
  });

  // Close popups when clicking anywhere else on the screen
  // TODO: is this valid?
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".footnote-reference")) {
      currentFootnoteId = null;
      document
        .querySelectorAll(".inline-footnote-popup")
        .forEach((p) => p.remove());
    }
  });
};

setup_footnotes();
